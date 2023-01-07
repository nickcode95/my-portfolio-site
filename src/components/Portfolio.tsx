import React from 'react';

// Return Portfolio images. If there is no src for a GitHub repo, we remove it from the render so we only display see live site
function Portfolio(props: any) {
    if (props.GitHub) {
        return (
            <div className="setHowManyFlexItems padding-top overflow max-width">   
            <a href={props.href} target="_blank" rel='noreferrer'><img src={props.src} alt={props.alt} className="portfolio-icons" /></a> 
                <span className="display-block center"><a href={props.href} target="_blank" rel='noreferrer'>See live site</a> <br /></span>
                <span className="display-block center"><a href={props.GitHub} target="_blank" rel='noreferrer'>See GitHub Repo</a> <br /></span>          
        </div>
        )
    } else {
        return (
        <div className="max-width padding-top overflow setHowManyFlexItems">
              <a href={props.href} target="_blank" rel='noreferrer'><img src={props.src} alt={props.alt} className="portfolio-icons" /></a>  
                <span className="display-block center"><a href={props.href} target="_blank" rel='noreferrer'>See live site</a> <br /></span>           
        </div>

    )
    }
    
}

export default Portfolio;