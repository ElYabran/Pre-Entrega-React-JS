import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 INICIANDO EXPORTACIÓN REACT (ES Modules)...');
console.log('📍 Directorio:', process.cwd());

// Verificar que estamos en el lugar correcto
if (!fs.existsSync('package.json')) {
    console.log('❌ ERROR: No se encuentra package.json');
    process.exit(1);
}

const archivoSalida = 'PROYECTO_REACT_COMPLETO.txt';
console.log(`📄 Creando archivo: ${archivoSalida}`);

try {
    const output = fs.createWriteStream(archivoSalida);
    
    output.write('PROYECTO REACT - EXPORTACIÓN\n');
    output.write('=============================\n\n');
    output.write(`Generado: ${new Date().toLocaleString()}\n\n`);
    
    // 1. DEPENDENCIAS
    if (fs.existsSync('package.json')) {
        console.log('✅ Agregando package.json...');
        const pkgContent = fs.readFileSync('package.json', 'utf8');
        const pkg = JSON.parse(pkgContent);
        
        output.write('INFORMACIÓN DEL PROYECTO:\n');
        output.write('-------------------------\n');
        output.write(`Nombre: ${pkg.name || 'Sin nombre'}\n`);
        output.write(`Versión: ${pkg.version || 'Sin versión'}\n\n`);
        
        output.write('SCRIPTS DISPONIBLES:\n');
        Object.entries(pkg.scripts || {}).forEach(([script, cmd]) => {
            output.write(`  ${script}: ${cmd}\n`);
        });
        
        output.write('\nDEPENDENCIAS PRINCIPALES:\n');
        if (pkg.dependencies) {
            Object.keys(pkg.dependencies).forEach(dep => {
                output.write(`  📦 ${dep}\n`);
            });
        }
        output.write('\n');
    }
    
    // 2. ARCHIVOS A INCLUIR
    const archivosIncluir = [
        // Config
        'public/manifest.json',
        
        // Main
        'src/main.jsx',
        'src/main.js',
        'src/App.jsx', 
        'src/App.js',
        
        // Context
        'src/context/CarritoContext.jsx',
        
        // Components
        'src/components/layout/Header.jsx',
        'src/components/layout/Footer.jsx',
        'src/components/layout/Main.jsx',
        'src/components/layout/Nav.jsx',
        'src/components/products/Producto.jsx',
        'src/components/RutaProtegida.jsx',
        
        // Pages
        'src/pages/Home.jsx',
        'src/pages/Productos.jsx',
        'src/pages/ProductoDetalle.jsx',
        'src/pages/Carrito.jsx',
        'src/pages/Login.jsx',
        'src/pages/Admin.jsx',
        
        // Styles
        'src/App.css'
    ];
    
    console.log('📁 Buscando archivos React...');
    let archivosExportados = 0;
    
    archivosIncluir.forEach(archivo => {
        if (fs.existsSync(archivo)) {
            console.log(`✅ ${archivo}`);
            archivosExportados++;
            
            output.write(`\n${'='.repeat(60)}\n`);
            output.write(`📄 ${archivo}\n`);
            output.write(`${'='.repeat(60)}\n\n`);
            
            const contenido = fs.readFileSync(archivo, 'utf8');
            output.write(contenido);
            output.write('\n');
        }
    });
    
    // 3. BUSCAR ARCHIVOS ADICIONALES
    function buscarArchivosAdicionales(carpeta) {
        if (!fs.existsSync(carpeta) || carpeta.includes('node_modules')) return;
        
        try {
            const items = fs.readdirSync(carpeta);
            
            items.forEach(item => {
                const ruta = path.join(carpeta, item);
                const stats = fs.statSync(ruta);
                
                if (stats.isDirectory()) {
                    buscarArchivosAdicionales(ruta);
                } else if (stats.isFile() && 
                          /\.(js|jsx|css)$/.test(item) &&
                          !archivosIncluir.includes(ruta)) {
                    
                    console.log(`📁 ${ruta}`);
                    archivosExportados++;
                    
                    output.write(`\n${'-'.repeat(50)}\n`);
                    output.write(`📄 ${ruta}\n`);
                    output.write(`${'-'.repeat(50)}\n\n`);
                    output.write(fs.readFileSync(ruta, 'utf8'));
                    output.write('\n');
                }
            });
        } catch (error) {
            console.log(`❌ Error en ${carpeta}:`, error.message);
        }
    }
    
    console.log('🔍 Buscando archivos adicionales...');
    buscarArchivosAdicionales('src');
    
    output.write(`\n${'='.repeat(50)}\n`);
    output.write('RESUMEN\n');
    output.write(`${'='.repeat(50)}\n`);
    output.write(`Archivos exportados: ${archivosExportados}\n`);
    output.write('Solo código esencial - Sin archivos largos innecesarios\n');
    
    output.end();
    
    console.log(`\n✅ EXPORTACIÓN COMPLETADA!`);
    console.log(`📄 Archivo: ${archivoSalida}`);
    console.log(`📁 Total archivos: ${archivosExportados}`);
    
    const stats = fs.statSync(archivoSalida);
    console.log(`📏 Tamaño: ${(stats.size / 1024).toFixed(1)} KB`);
    
} catch (error) {
    console.log('❌ ERROR:', error.message);
}