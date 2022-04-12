import express, { request, response } from 'express';
import fetch from 'node-fetch';
const router = express.Router();

router.get('/characters', async(require, response) => {
    const url = 'https://www.breakingbadapi.com/api/characters';
    const data_response = await fetch(url, {method:'get'});
    const data = await data_response.json();

    return response.render('characters', {
        data: data
    })
})

router.get('/episodes', async(request, response) => {
    const url = 'https://www.breakingbadapi.com/api/episodes';
    const data_response = await fetch(url, {method:'get'});
    const data = await data_response.json();

    return response.render('episodes', {
        data: data
    })
})

router.get('/quotes', async(request, response) => {
    const url = 'https://www.breakingbadapi.com/api/quotes';
    const data_response = await fetch(url, {method:'get'});
    const data = await data_response.json();

    return response.render('quotes', {
        data: data
    })
})

router.get('/details/:id', async(request, response) => {
    const id = request.params.id;
    const url = `https://www.breakingbadapi.com/api/characters/${id}`;
    const data_response = await fetch(url, {method:'get'});
    const data = await data_response.json();

    return response.render('details', {
        data: data
    })
})

export default router;