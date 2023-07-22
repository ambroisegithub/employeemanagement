import axios from 'axios';
import fs from 'fs';
import path from 'path';

export async function downloadImage(imageUrl) {
    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const extension = path.extname(imageUrl);
        const fileName = `${Math.floor(Math.random() * 10000000)}${extension}`;
        const filePath = path.join(__dirname, '..', 'public', 'images', fileName);
        fs.writeFileSync(filePath, response.data);
        return filePath;
    } catch (error) {
        console.error(error);
        throw error;
    }
}