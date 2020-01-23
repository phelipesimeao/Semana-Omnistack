const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//index, show, store, update, destroy

module.exports = {
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        
        let developer = await Dev.findOne({ github_username: github_username });

        if (!developer) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };

            developer = await Dev.create({
                name,
                github_username,
                bio,
                avatar_url,
                techs: techsArray,
                location
            });
        }
        return response.json(developer);
    },
    async update(request, response){
        //atualizar as informações
        //nome, avatar, bio, localização, tecnologias

        const { name, github_username, bio } = request.body;

        let dev = await Dev.findOne({ github_username });

        // const techsArray = parseStringAsArray(techs);

        // const location = {
        //     type: 'Point',
        //     coordinates: [longitude, latitude]
        // };

        dev.name = name;
        dev.bio = bio;
        // dev.avatar_url = avatar_url;
        // dev.techs = techsArray;
        // dev.location = location;

        const ret = await dev.save();

        return response.json({ ret });
    },
    async destroy(request, response){
        const { _id } = request.params;
        
        const ret = await Dev.deleteOne({ _id });

        return response.json({ ret });
    },

}; 