require('dotenv').config();
const isAdmin = process.env.IS_ADMIN === 'true';
console.log(isAdmin,process.env.IS_ADMIN)
if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}