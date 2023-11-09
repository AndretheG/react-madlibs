import React from 'react';

// Shows completed story.

function Story({template, answers, restart}) {

    // Turn template into resolved story

    function makeStory() {
        let story = template;

        for (let key in answers) {
            story = story.replace(`[${key}]`, answers[key]);
        }

        return story;
    }

    return (
        <div className="Story">
            <p> {makeStory()} </p>
            <button onClick={restart}>Restart</button>
        </div>
    );
}

export default Story;