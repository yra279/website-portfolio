import Hub from './Components/Hub/Hub';
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { projectInfoAdd } from './store/actions/project';
import { v4 as uuid } from 'uuid';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const defaultState = [
            {
                urlPhoto: 'https://cdn.fishki.net/upload/post/2019/05/17/2980924/1-depositphotos-11856682-l-2015.jpg',
                title: 'My project',
                id: uuid(),
                text: 'Картофель',
                stack: '',
            },
            {
                urlPhoto: 'https://cdn.fishki.net/upload/post/2019/05/17/2980924/1-depositphotos-11856682-l-2015.jpg',
                title: 'My project',
                id: uuid(),
                text: 'Кот',
                stack: '',
            },
            {
                urlPhoto: 'https://cdn.fishki.net/upload/post/2019/05/17/2980924/1-depositphotos-11856682-l-2015.jpg',
                title: 'My project',
                id: uuid(),
                text: 'Картофель',
                stack: '',
            },
            {
                urlPhoto: 'https://cdn.fishki.net/upload/post/2019/05/17/2980924/1-depositphotos-11856682-l-2015.jpg',
                title: 'My project',
                id: uuid(),
                text: 'Кот',
                stack: '',
            },
            {
                urlPhoto: 'https://cdn.fishki.net/upload/post/2019/05/17/2980924/1-depositphotos-11856682-l-2015.jpg',
                title: 'My project',
                id: uuid(),
                text: 'Картофель',
                stack: '',
            },
            {
                urlPhoto: 'https://cdn.fishki.net/upload/post/2019/05/17/2980924/1-depositphotos-11856682-l-2015.jpg',
                title: 'My project',
                id: uuid(),
                text: 'Кот',
                stack: '',
            },
            {
                urlPhoto: 'https://cdn.fishki.net/upload/post/2019/05/17/2980924/1-depositphotos-11856682-l-2015.jpg',
                title: 'My project',
                id: uuid(),
                text: 'Картофель',
                stack: '',
            },
            {
                urlPhoto: 'https://cdn.fishki.net/upload/post/2019/05/17/2980924/1-depositphotos-11856682-l-2015.jpg',
                title: 'My project',
                id: uuid(),
                text: 'Кот',
                stack: '',
            },
        ];

        defaultState.forEach(project => dispatch(projectInfoAdd(project)));
    }, []);
    return (
        <div>
            <Hub />
        </div>
    );
}

export default App;
