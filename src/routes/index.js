const { Router } = require('express');
const router = Router();
const axios = require('axios');
const registry = require('./registry.json');
router.all('/:apiName/:path', function (req, res) {
    console.log(req.headers);
    if (registry.services[req.params.apiName]) {
        axios({
            method: req.method,
            url: `${registry.services[req.params.apiName].url}/${
                req.params.path
            }`,
            data: req.body,
            headers: {
                Authorization: 'Bearer ' + 'token',
            },
        })
            .then((result) => {
                return res.status(200).json(result.data);
            })
            .catch((err) => {
                return res.status(400).json(err.response.data);
            });
    } else {
        return res.status(404).json({ message: 'Api name does not exist' });
    }
});
module.exports = router;
