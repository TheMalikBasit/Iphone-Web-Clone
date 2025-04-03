const express = require('express');
const app = express();

app.get('/Profile/Settings', (req, res) => {
    // Handle the request for the profile settings page here
    const data = {
        title: 'Profile Settings',
        description: 'Manage your profile settings here.',
    };
    res.json(data);
    console.log(data);
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
}
);