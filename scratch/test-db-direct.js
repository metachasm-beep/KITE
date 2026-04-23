const { Client } = require('pg');

async function testConnection(url, name) {
    console.log(`Testing ${name}...`);
    const client = new Client({
        connectionString: url,
    });

    try {
        await client.connect();
        console.log(`✅ ${name} connected successfully!`);
        await client.end();
    } catch (err) {
        console.error(`❌ ${name} failed:`, err.message);
    }
}

// Trying the direct host
const directHostUrl = "postgresql://postgres:Metalheaddean881@db.xhmgjzwuykrjsatrhosn.supabase.co:5432/postgres";

(async () => {
    await testConnection(directHostUrl, "Direct Host URL");
})();
