import React from 'react'
import Share from './Share'
import Post from './Post'

const Publication = () => {
    return (
        <div class="col-md-6 gedf-main">
            <Share/>
            <Post
                userImage = "https://picsum.photos/50/50"
                userName = "LeeCross"
                fullName = "Miracles Lee Cross"
                timeShared = "10 min ago"
                linkPrincipal = "Lorem ipsum dolor sit amet, consectetur adip."
                content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates."
            />
            <Post
                userImage = "https://picsum.photos/50/50"
                userName = "Kevin"
                fullName = "Kevin Hernandez Gomez"
                timeShared = "20 min ago"
                linkPrincipal = "https://github.com/kevinTibu/Hackathon"
                content = "Everything is good men"
            />
            <Post
                userImage = "https://picsum.photos/50/50"
                userName = "Kevin Esquivel"
                fullName = "Kevin Esquivel"
                timeShared = "2 seg ago"
                linkPrincipal = "Kevinesquivelrojas@hotmail.com"
                content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates."
            />
        </div>
    )
}

export default Publication
