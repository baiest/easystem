import React, {Component} from 'react'

export default class InformacionContacto extends Component{
    constructor(props){
        super(props)
        this.state = {
            twttr: null
        }
    }

    async componentDidMount (){
        if(typeof window.__twttr === 'undefined'){
            const node = document.getElementById('root')
            const twitterscript = document.createElement('script');
            twitterscript.src = '//platform.twitter.com/widgets.js';
            twitterscript.async = true;
            twitterscript.id = 'twitter-wts';
            node.appendChild(twitterscript);
        }
        else{

            try{
                window.twttr.widgets.load()
            }catch(e){
                console.log(window.twttr)
            }
        }
    }

    render(){
        return(
            <div className='row col justify-content-around align-items-center'>
                <div className="col card " style={{height: '500px'}}>
                    <a className="twitter-timeline"
                    data-height="500"
                    href="https://twitter.com/easystemcol?ref_src=twsrc%5Etfw"
                    rel="noreferrer">Tweets by easystemcol
                    </a> 
                </div>
                <div className="col">
                    <iframe 
                    className='col mt-4 mb-4 justify-content-center d-flex'
                    scrolling="no"
                    src='https://maps.google.com/maps?q=easystem&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near'
                    title="easystem" 
                    aria-label="easystem"
                    height="400"
                    width="400"
                    style={{border: '0'}}></iframe>
                </div>
            </div>
        );
    }
}