import React from 'react';

// Return Portfolio images. If there is no src for a GitHub repo, we remove it from the render so we only display see live site
function Portfolio(props: any) {
    if (props.GitHub) {
        return (
            <div className="portfolio max-width padding-top overflow">
            <div>
            <a href={props.href} target="_blank" rel='noreferrer'><img src={props.src} alt={props.alt} className="portfolio-icons" /></a> 
                <span className="display-block center"><a href={props.href} target="_blank" rel='noreferrer'>See live site</a> <br /></span>
                <span className="display-block center"><a href={props.GitHub} target="_blank" rel='noreferrer'>See GitHub Repo</a> <br /></span>          
            </div>

        </div>
        )
    } else {
        return (
        <div className="portfolio max-width padding-top overflow">
            <div>
              <a href={props.href} target="_blank" rel='noreferrer'><img src={props.src} alt={props.alt} className="portfolio-icons" /></a>  
                <span className="display-block center"><a href={props.href} target="_blank" rel='noreferrer'>See live site</a> <br /></span>           
            </div>

        </div>

    )
    }
    
}

export default Portfolio;