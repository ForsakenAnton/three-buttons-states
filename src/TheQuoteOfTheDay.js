
import React, { useState } from 'react';

export default function TheQuoteOfTheDay(props) {

    let { quote, author, style } = props;

    return (
        <>
            <blockquote style={style}>
                <p>{quote}</p>
                {/* <p><cite>{author}</cite></p> */}
    <p>{author}</p>
            </blockquote>
        </>
    )
}