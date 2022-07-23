import React from 'react'
import './Footer.css'

const Footer = () => {
  return (   <div class="footer">
  <footer>
      
          <div class="row">
              <div class="col-sm-8 col-md-3 item">
                  <a className='a1'>Categories</a>
                  <div className='list'>
                  <ul>
                      <li><a href="/Tvshows">Tv Shows</a></li>
                      <li><a href="/Movies">Movies</a></li>
                      <li><a href="/Recent">Recently Added</a></li>
                      <li><a href="/Recommend">Recommendations</a></li>
                  </ul>
                  </div>
              </div>
              <div class="col-md-6 item text">
                  <a className="a" href="/">Showzflix</a>
                  <p>Showzflix is an online platform for information related to films, television series, home videos, video games, and streaming content online – including plot summaries, trivia, ratings, and fan and critical reviews.</p>
              </div>
              <div class="col item social"><a href="https://www.facebook.com/akshat.saxena.1000"><i class="icon ion-social-facebook"></i></a><a href="https://www.instagram.com/axtsxna/"><i class="icon ion-social-instagram"></i></a><a href="https://www.linkedin.com/in/akshat-saxena-41a9771a0/"><i class="icon ion-social-linkedin"></i></a></div>
          </div>
          <p class="copyright">Copyright © Showzflix (axtsxna) 2021</p>
      
  </footer>
</div>
        
  )
}

export default Footer
