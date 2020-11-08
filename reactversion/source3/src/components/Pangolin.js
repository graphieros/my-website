import React, { useState } from 'react';
import './css/Pangolin.css';
import Fractal from './graphieros/Fractal';
import labyrinth_posts from '../libraries/labyrinth_posts.json';

function Pangolin() {

    const size = 66;

    const [dayState, setDayState] = useState({
        className: "hidden",
        day: '',
        date: '',
        content: '',
        sequence: 'ss'
    });

    const handleModal = (post) => {
        setDayState({
            className: "visible-day",
            day: post.day,
            date: post.date,
            content: post.cypher,
            sequence: post.sequence
        });
    }

    const handleQuit = () => {
        setDayState({
            className: 'hidden',
            day: '',
            date: '',
            content: '',
            sequence: 'ss'
        });
    }

    const week0 = labyrinth_posts.map((post, i) => {
        if (i < 5) {
            return (
                <div id={`lab-${i}`} key={i} onClick={() => handleModal(post)}>
                    <Fractal
                        className='fractal-labyrinth'
                        sequence={post.sequence}
                        colors={post.colors}
                        svgSize= {size}
                        light={post.light}
                    />
                </div>
            )
        }
        return null;
    });

    // if (n % 5 === 0) switch className

    const week1 = labyrinth_posts.map((post, i) => {
        if (i >= 5 && i < 10) {
            return (
                <div id={`lab-${i}`} key={i} onClick={() => handleModal(post)}>
                    <Fractal
                        className='fractal-labyrinth'
                        sequence={post.sequence}
                        colors={post.colors}
                        svgSize={size}
                        light={post.light}
                    />
                </div>
            )
        }
        return null;
    });

    const week2 = labyrinth_posts.map((post, i) => {
        if (i >= 10 && i < 15) {
            return (
                <div id={`lab-${i}`} key={i} onClick={() => handleModal(post)}>
                    <Fractal
                        className='fractal-labyrinth'
                        sequence={post.sequence}
                        colors={post.colors}
                        svgSize={size}
                        light={post.light}
                    />
                </div>
            )
        }
        return null;
    });

    const week3 = labyrinth_posts.map((post, i) => {
        if (i >= 15 && i < 20) {
            return (
                <div id={`lab-${i}`} key={i} onClick={() => handleModal(post)}>
                    <Fractal
                        className='fractal-labyrinth'
                        sequence={post.sequence}
                        colors={post.colors}
                        svgSize={size}
                        light={post.light}
                    />
                </div>
            )
        }
        return null;
    });

    const week4 = labyrinth_posts.map((post, i) => {
        if (i >= 20 && i < 25) {
            return (
                <div id={`lab-${i}`} key={i} onClick={() => handleModal(post)}>
                    <Fractal
                        className='fractal-labyrinth'
                        sequence={post.sequence}
                        colors={post.colors}
                        svgSize={size}
                        light={post.light}
                    />
                </div>
            )
        }
        return null;
    });

    const week5 = labyrinth_posts.map((post, i) => {
        if (i >= 25 && i < 30) {
            return (
                <div id={`lab-${i}`} key={i} onClick={() => handleModal(post)}>
                    <Fractal
                        className='fractal-labyrinth'
                        sequence={post.sequence}
                        colors={post.colors}
                        svgSize={size}
                        light={post.light}
                    />
                </div>
            )
        }
        return null;
    });

    return (
        <div className='pangolin-body'>

            <div className='labyrinth-grid'>
                <div className="labyrinth-name">labyrinthe</div>
                <div className='labyrinth-week-odd'>
                    {week0}
                </div>
                <div className='labyrinth-week-even'>
                    {week1}
                </div>
                <div className='labyrinth-week-odd'>
                    {week2}
                </div>
                <div className='labyrinth-week-even'>
                    {week3}
                </div>
                <div className='labyrinth-week-odd'>
                    {week4}
                </div>
                <div className='labyrinth-week-even'>
                    {week5}
                </div>
            </div>

            <div className={dayState.className}>

                <div className='btn-quit-day' onClick={handleQuit}>
                    <Fractal
                        className='quit-day'
                        sequence='zx-we'
                        svgSize='30'
                        colors={[255, 255, 255]}
                    />
                </div>

                <Fractal
                    className='watermark'
                    sequence={dayState.sequence}
                    svgSize='250'
                    colors={[211, 227, 252]}
                    light={true}
                />

                <p className='numDay'>
                    jour
                    <span> {dayState.day}</span>
                    <span className='labySpanDate'>{dayState.date}</span>
                </p>

                <div className='textDay'>
                    {dayState.content}
                </div>

            </div>

        </div>
    )
}

export default Pangolin;
