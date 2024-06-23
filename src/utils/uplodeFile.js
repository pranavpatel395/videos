import { v2 } from 'cloudinary';
import fs from 'fs'
import { resourceUsage } from 'process';

cloudinary.config({ 
  cloud_name: 'process.env.CLOUDNARY_CLOUD_NAME', 
  api_key: 'process.env.CLOUDNARY_API_KEY', 
  api_secret: 'process.env.CLOUDNARY_API_SECRET'
});

const fileuplodeCloudnary = async (localFilePath)=>{
  try{
  if(!localFilePath) return null
  const response = await cloudinary.uploder.uplode(localFilePath ,{
    resource_type : "auto"
  })
  console.log("file is uploaded on cloudinary ", response.url);

  fs.unlinkSync(localFilePath)
  return response;
} catch (error){
  fs.unlinkSync(localFilePath)
  return null;
}
}


export {fileuplodeCloudnary}