function Demo(){

    return ( 

        <div className="s-content">

        <div className="row add-bottom">

            <div className="column large-full">

                <h1 className="h-remove-top">Style Guide.</h1>

                <p className="lead">Lorem ipsum Officia elit ad tempor dolore est ex incididunt incididunt occaecat culpa deserunt 
                sunt labore in cillum ullamco magna in Excepteur consequat in reprehenderit proident mollit incididunt officia commodo.
                Duis ea officia sed dolor pariatur enim dolore dolore quis incididunt nulla exercitation commodo veniam et ea incididunt.
                </p>

            </div>

        </div> 

        <div className="row">

            <div className="column large-6 tab-full">

                <h3>Paragraph and Image</h3>

                <p><a href="#" ><img width="120" height="120" className="h-pull-left" alt="sample-image" src="images/sample-image.jpg"/></a>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum.Cras id urna. Morbi 
                tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, 
                purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci ut diam. Cras fringilla magna. 
                Phasellus suscipit, leo a pharetra condimentum, lorem tellus eleifend magna, eget fringilla velit magna id 
                neque posuere nunc justo tempus leo. </p>

                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. 
                Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. 
                Donec mattis, purus nec placerat bibendum, dui pede condimentumodio, ac blandit ante orci ut diam.	
                </p>

                <p>A <a href="#">link</a>,
                <abbr title="this really isn't a very good description">abbrebation</abbr>,
                <strong>strong text</strong>,
                <em>em text</em>,
                <del>deleted text</del>, and
                <mark>this is a mark text.</mark>
                <code>.code</code>
                </p>

            </div>

            <div className="column large-6 tab-full">

                <h3>Drop Caps</h3>

                <p className="drop-cap">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the 
                necessary regelialia. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, 
                euposuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, 
                ac blandit ante orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra condimentum, 
                lorem tellus eleifend magna, eget fringilla velit magna id neque.
                </p>

                <h3>Small Print</h3>

                <p>Buy one widget, get one free!
                <small>(While supplies last. Offer expires on the vernal equinox. Not valid in Ohio.)</small>
                </p>

            </div>

        </div> 

        <div className="row">

            <div className="column large-6 tab-full">

                <h3>Pull Quotes</h3>

                <aside className="pull-quote">
                    <blockquote>
                    <p>
                    When you look in the eyes of grace, when you meet grace, 
                    when you embrace grace, when you see the nail prints in 
                    grace’s hands and the fire in his eyes, when you feel his 
                    relentless love for you - it will not motivate you to sin. 
                    It will motivate you to righteousness.
                    </p>
                    </blockquote>
                </aside>

            </div>

            <div className="column large-6 tab-full">

                <h3>Block Quotes</h3>

                <blockquote cite="http://where-i-got-my-info-from.com">
                    <p>
                    For God so loved the world, that he gave his only Son, that whoever believes in 
                    him should not perish but have eternal life. For God did not send his Son into 
                    the world to condemn the world, but in order that the world might be 
                    saved through him.
                    </p>
                    <cite>
                        <a href="#0">John 3:16-17 ESV</a>
                    </cite>
                </blockquote>

                <blockquote>
                <p>There is a God-shaped vacuum in the heart of each man which cannot be satisfied 
                by any created thing but only by God the Creator.</p>
                <cite>Blaise Pascal</cite>
                </blockquote>

            </div>

        </div> 

        <div className="row half-bottom">

            <div className="column large-6 tab-full">

                <h3>Example Lists</h3>

                <ol>
                    <li>Here is an example</li>
                    <li>of an ordered list.</li>
                    <li>A parent list item.
                        <ul>
                            <li>one</li>
                            <li>two</li>
                            <li>three</li>
                        </ul>
                        </li>
                        <li>A list item.</li>
                    </ol>

                <ul className="disc">
                    <li>Here is an example</li>
                    <li>of an unordered list.</li>
                </ul>

                <h3>Definition Lists</h3>

                <h5>a) Multi-line Definitions (default) </h5>

                <dl>
                    <dt><strong>This is a term</strong></dt>
                        <dd>this is the definition of that term, which both live in a <code>dl</code>.</dd>
                    <dt><strong>Another Term</strong></dt>
                        <dd>And it gets a definition too, which is this line</dd>
                        <dd>This is a 2<sup>nd</sup> definition for a single term. A <code>dt</code> may be followed by multiple <code>dd</code>s.</dd>
                </dl>

            </div>

            <div className="column large-6 tab-full">

                <h3>Buttons</h3>

                <p>
                    <a className="btn btn--primary h-full-width" href="#0">Primary Button</a>
                    <a className="btn h-full-width" href="#0">Default Button</a>
                    <a className="btn btn--stroke h-full-width" href="#0">Stroke Button</a>
                </p>

                <h3>Stats Tabs</h3>

                <ul className="stats-tabs">
                    <li><a href="#0">1,234 <em>Peter</em></a></li>
                    <li><a href="#0">567 <em>James</em></a></li>
                    <li><a href="#0">23,456 <em>John</em></a></li>
                    <li><a href="#0">3,456 <em>Andrew</em></a></li>
                    <li><a href="#0">456 <em>Philip</em></a></li>
                    <li><a href="#0">26 <em>Matthew</em></a></li>
                </ul>

            </div>

        </div> 

        <div className="row half-bottom">

            <div className="column large-6 tab-full">
                    
                <h1>H1 Heading</h1>
                <p>Doloremque dolor voluptas est sequi omnis. Pariatur ut aut. Sed enim tempora qui veniam qui cum vel. 
                Voluptas odit at vitae minima. In assumenda ut. Voluptatem totam impedit accusantium reiciendis excepturi aut qui accusamus praesentium.</p>

                <h2>H2 Heading</h2>
                <p>Doloremque dolor voluptas est sequi omnis. Pariatur ut aut. Sed enim tempora qui veniam qui cum vel. 
                Voluptas odit at vitae minima. In assumenda ut. Voluptatem totam impedit accusantium reiciendis excepturi aut qui accusamus praesentium.</p>

                <h3>H3 Heading</h3>
                <p>Doloremque dolor voluptas est sequi omnis. Pariatur ut aut. Sed enim tempora qui veniam qui cum vel. 
                Voluptas odit at vitae minima. In assumenda ut. Voluptatem totam impedit accusantium reiciendis excepturi aut qui accusamus praesentium.</p>

            </div>

            <div className="column large-6 tab-full">
                    
                <h4>H4 Heading</h4>
                <p>Doloremque dolor voluptas est sequi omnis. Pariatur ut aut. Sed enim tempora qui veniam qui cum vel. 
                Voluptas odit at vitae minima. In assumenda ut. Voluptatem totam impedit accusantium reiciendis excepturi aut qui accusamus praesentium.</p>

                <h5>H5 Heading</h5>
                <p>Doloremque dolor voluptas est sequi omnis. Pariatur ut aut. Sed enim tempora qui veniam qui cum vel. 
                Voluptas odit at vitae minima. In assumenda ut. Voluptatem totam impedit accusantium reiciendis excepturi aut qui accusamus praesentium.</p>

                <h6>H6 Heading</h6>
                <p>Doloremque dolor voluptas est sequi omnis. Pariatur ut aut. Sed enim tempora qui veniam qui cum vel. 
                Voluptas odit at vitae minima. In assumenda ut. Voluptatem totam impedit accusantium reiciendis excepturi aut qui accusamus praesentium.</p>

            </div>

        </div> 

        <div className="row half-bottom">

            <div className="column large-6 tab-full">

                <h3>Responsive Image</h3>
                <p><img src="images/wheel-500.jpg" 
                    srcSet="images/wheel-1000.jpg 1000w, 
                    images/wheel-500.jpg 500w" 
                    sizes="(max-width: 1000px) 100vw, 1000px" alt="" />
                </p>

            </div>

            <div className="column large-6 tab-full">

                <h3>Responsive video</h3>

                <div className="video-container">
                <iframe src="https://player.vimeo.com/video/14592941?color=00a650&title=0&byline=0&portrait=0" width="500" height="281" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe> 
                </div>

            </div>
            
        </div> 

        <div className="row add-bottom">

            <div className="column large-full">

                <h3>Tables</h3>
                <p>Be sure to use properly formed table markup with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> when building a <code>table</code>.</p>

                <div className="table-responsive">

                    <table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Sex</th>
                                <th>Location</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>William J. Seymour</td>
                                <td>34</td>
                                <td>Male</td>
                                <td>Azusa Street</td>
                            </tr>
                            <tr>
                                <td>Jennie Evans Moore</td>
                                <td>30</td>
                                <td>Female</td>
                                <td>Azusa Street</td>
                            </tr>
                            </tbody>
                    </table>

                </div>

            </div>
            
        </div> 

        <div className="row">

            <div className="column large-full">
                <h3>Pagination</h3>

                <nav className="pgn">
                    <ul>
                        <li><a className="pgn__prev" href="#0">Prev</a></li>
                        <li><a className="pgn__num" href="#0">1</a></li>
                        <li><span className="pgn__num current">2</span></li>
                        <li><a className="pgn__num" href="#0">3</a></li>
                        <li><a className="pgn__num" href="#0">4</a></li>
                        <li><a className="pgn__num" href="#0">5</a></li>
                        <li><span className="pgn__num dots">…</span></li>
                        <li><a className="pgn__num" href="#0">8</a></li>
                        <li><a className="pgn__next" href="#0">Next</a></li>
                    </ul>
                </nav>
            </div>

        </div> 

        <div className="row">

            <div className="column large-6 tab-full">

                <h3>Form Styles</h3>

                <form>
                    <div>
                        <label htmlFor="sampleInput">Your email</label>
                        <input className="h-full-width" type="email" placeholder="test@mailbox.com" id="sampleInput" />
                    </div>
                    <div>
                        <label htmlFor="sampleRecipientInput">Reason for contacting</label>
                        <div className="ss-custom-select">
                            <select className="h-full-width" id="sampleRecipientInput">
                                <option value="Option 1">Questions</option>
                                <option value="Option 2">Report</option>
                                <option value="Option 3">Others</option>
                            </select>
                        </div>
                    </div>
                    
                    <label htmlFor="exampleMessage">Message</label>
                    <textarea className="h-full-width" placeholder="Your message" id="exampleMessage"></textarea>

                    <label className="h-add-bottom">
                        <input type="checkbox" />
                        <span className="label-text">Send a copy to yourself</span>
                    </label>
                
                    <input className="btn--primary h-full-width" type="submit" value="Submit"/>
                </form>

            </div>

            <div className="column large-6 tab-full">

                <h3>Alert Boxes</h3>

                <br/>
                
                <div className="alert-box alert-box--error hideit">
                    <p>Error Message. Your Message Goes Here.</p>
                    <i className="fa fa-times alert-box__close" aria-hidden="true"></i>
                </div>

                <div className="alert-box alert-box--success hideit">
                    <p>Success Message. Your Message Goes Here.</p>
                    <i className="fa fa-times alert-box__close" aria-hidden="true"></i>
                </div>

                        
                <div className="alert-box alert-box--info hideit">
                    <p>Info Message. Your Message Goes Here.</p>
                    <i className="fa fa-times alert-box__close" aria-hidden="true"></i>
                </div>

                <div className="alert-box alert-box--notice hideit">
                    <p>Notice Message. Your Message Goes Here.</p>
                    <i className="fa fa-times alert-box__close" aria-hidden="true"></i>
                </div>
            
            </div>

        </div> 

        <div className="row">

            <div className="large-12 column">
               <h3 className="half-bottom">Grid Columns</h3>
            </div>
   
         </div> 
   
        
         <div className="row">
   
            <div className="large-4 mob-12 column">
                <p>
                Cras aliquet. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor. 
                </p>
             </div>
   
            <div className="large-4 mob-12 column">
                <p>
                Cras aliquet. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor. 
                </p>
            </div>
   
            <div className="large-4 mob-12 column">
                <p>
                Cras aliquet. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor. 
                </p>
            </div>
   
         </div>
   
        
   
         <div className="row">
   
            <div className="large-3 tab-6 mob-12 column">
                <p>
                Cras aliquet. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor. 
                </p>
            </div>
   
            <div className="large-3 tab-6 mob-12 column">
                <p>
                Cras aliquet. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor. 
                </p>
            </div>
   
            <div className="large-3 tab-6 mob-12 column">
                <p>
                Cras aliquet. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor. 
                </p>
            </div>
   
            <div className="large-3 tab-6 mob-12 column">
                <p>
                Cras aliquet. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor. 
                </p>
            </div>
   
        </div>
   
       
   
        <div className="row">
   
            <div className="large-6 mob-12 column">
                <p>
                Cras aliquet. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor. 
                </p>
            </div>
   
            <div className="large-6 mob-12 column">
                <p>
                Cras aliquet. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor. 
                </p>
            </div>
   
        </div>
   
    
   
        <div className="row">
   
            <div className="large-8 tab-7 mob-12 column">
                <p>
                Cras aliquet. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor.
                </p>
            </div>
   
            <div className="large-4 tab-5 mob-12 column">
                <p>
                Cras aliquet. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor. 
                </p>
            </div>
   
         </div>
   
         <h2> Grid columns </h2>
   
         <div className="row">
   
            <div className="large-3 tab-5 mob-12 column">
                <p>
                Cras aliquet. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at. 
                </p>
             </div>
   
            <div className="large-9 tab-7 mob-12 column">
                <p>
                Cras aliquet. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor.Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor. Integer faucibus, eros ac molestie placerat, enim tellus varius lacus,
                nec dictum nunc tortor id urna. Suspendisse dapibus ullamcorper pede. Vivamus ligula ipsum,
                faucibus at, tincidunt eget, porttitor non, dolor.
                </p>
             </div>
   
         </div> 

   </div> 

     )
}

export default Demo;