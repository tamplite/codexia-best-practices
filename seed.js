/**
 * @owner Codexia & Cruz Romero Morales
 * @status AIG
 * @reason Script to fetch the local best practices doc and upload it to Firestore.
 */

const fs = require('fs');
const path = require('path');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc } = require('firebase/firestore');

// This script will run in a GitHub Action, where the config will be provided by secrets.
// For local testing, you can uncomment and fill this in.
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GCP_PROJECT_ID, // This will come from GitHub Secrets
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const bestPracticesPath = path.join(__dirname, 'DEVELOPMENT_BEST_PRACTICES.md');
const markdown = fs.readFileSync(bestPracticesPath, 'utf8');

const sections = markdown.split('\n## ').slice(1);

const universalSections = [
    'Core Philosophy',
    'Inclusive Design Principles',
    'Code Quality Standards',
    'Contribution & Attribution Model',
    'The Hypothesis-Plan-Confirm Protocol',
    'Strategic Rollback & Post-Change Summary'
];

async function seedDatabase() {
    console.log('Starting to seed knowledge base from local file...');
    const knowledgeBaseRef = collection(db, 'knowledge_base');

    for (const sectionText of sections) {
        const lines = sectionText.split('\n');
        const title = lines[0].trim();
        const content = lines.slice(1).join('\n').trim();
        const docId = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

        const sectionData = {
            title: title,
            content: content,
            type: universalSections.includes(title) ? 'universal' : 'situational'
        };

        try {
            await setDoc(doc(knowledgeBaseRef, docId), sectionData);
            console.log(`Successfully seeded section: "${title}"`);
        } catch (error) {
            console.error(`Failed to seed section: "${title}"`, error);
            // Throw the error to make the GitHub Action fail if seeding fails
            throw error;
        }
    }
    console.log('Finished seeding knowledge base.');
}

seedDatabase().catch(err => {
    console.error(err);
    process.exit(1);
});
