import React, { Fragment } from 'react'
import ReactEmoji from 'react-emoji'
import './Bio.css'
import Article1Photo from './Article1Photo.jpg'
import Article2Photo from './Article2.jpg'
import Article3Photo from './Article1.png'

  const Bio = () => (
    <Fragment>
        <div className='bioWrapper'>
          <div className='bioContainer'>
            <div className='bioArticle'>
              <div className='bioArticleCopy'>
                <div className='bioDescription'>
                <h1 className='bioArticleTitle'>About Me</h1>
                <p>I’m a <span className="highlight">
                Seattle based Developer passionate about building better digital
                experiences</span>. Mobile compatibility, stronger navigation,
                better user flows, maybe even music ({ReactEmoji.emojify(';)')})
                &mdash;these are the elements of the digital experience that I
                hope to make the cornerstone of my career.
                </p>
                <p>
                This is the story of my journey from Boston based Marketer, to
                Seattle based Developer!</p>
                <hr width='35%' className='bioDivider'/>
                <h1 className='bioArticleTitle'>June, '14 - June, '19'</h1>
                <img src={Article3Photo} alt='EF Center Boston' className='bioPhoto'/>
                <p>I was fortunate to find myself at
                a fantastic organization shortly after my college studies. I
                spent 5 years at EF Educational Tours in both Customer Service
                as well as Marketing. This is where I found my desire to work in
                technology. While with the Customer Service team, I became a power
                user for our CRM system, as well as grew to be an advanced excel
                users able to comb through customer data to identify various opportunities
                and threats the customer service team could help address. Ultimately,
                that desire to work in technology turned into a marketing role as
                the Marketing Technology Coordinator.</p>
                  <hr width='35%' className='bioDivider'/>
                <p>My role focused primarily on the digital marketing presence. Working
                with our design team, I developed a love of building beautiful digital
                experiences. I was able to develop a strong skillset for our CMS
                platform (Scribble Media&mdash;formerly Ion interactive) that allowed
                us to build incredble lead caputure and customer engagement experiences!
                While we enjoyed alot of success together, ultimately there came a
                point where design features and functionality went beyond what our
                CMS could accomplish. I left EF to pursue the software knowledge
                that would allow me to continue to develop and deliver even greater
                digital experiences.</p>
                  <hr width='35%' className='bioDivider'/>
                <h1 className='bioArticleTitle'>June, '19 - September, '19'</h1>
                <p>Following EF, I found myself in a software Bootcamp led by the
                phenominal folks at General Assembly. I can't speak highly enough
                about my experience there. (To any would-be Bootcampers or anyone
                with an interest in the course at G.A.&mdash;please feel free to
                reach out and connect!) I joined the 'Software Engineering Immersive'
                3 cohort in Boston, MA.</p>
                  <hr width='35%' className='bioDivider'/>
                  <img src={Article2Photo} alt='General Assembly Boston' className='bioPhotoR'/>
                <p>In the 12 week program, I went from knowing
                just enough about software to be dangerous on accident, to being
                knowledgable enough to be dangerous on purpose. A common question
                I recieve is what the most important take-aways are from the course.</p>
                  <hr width='35%' className='bioDivider'/>
                <p>First, they tought me to find, read, <em>understand and create </em>
                 software documentation. I'm a firm believer in the importance of
                documentation&mdash;from robust documentation like the JS MDN docs
                to how to effectively comment your own code.</p>
                  <hr width='35%' className='bioDivider'/>
                <p>Second, alot of being successful in software is found in
                uncomfortable, frusterating, sometimes overwhelming moments. The
                Growth Mindset is an imparative one to learning software, and the
                best way to facilitate those moments is to dive in, probably fail
                a few times, but persist until you succeed. Whether in the bootcamp
                system or simply learning online through tutorials and videos, this
                is a key part of learning to code. I'm extremely greatful to the
                GA community for my education there.</p>
                  <hr width='35%' className='bioDivider'/>
                <h1 className='bioArticleTitle'>September, '19 - Current</h1>
                <img src={Article1Photo} alt='James and Meagan' className='bioPhoto'/>
                <p>During the excitment of my learning to code, my partner, Meagan,
                found herself applying for her own continued education. After
                recieving offers to study at a number of institutions around the
                country, she chose to get her Masters degree in Public Health at
                the University of Washington. So after completing the General
                Assembly Bootcamp, we loaded up my mazda 3 and set
                out for the great Atlantic Northwest.</p>
                  <hr width='35%' className='bioDivider'/>
                <p>And that leads me here. I'm a Cleveland sports fan, Boston transplant,
                and Seattle beer league hockey rookie. I love a good pun and hate
                a warm beer. Rarely will I turn down an oyster, and never will I
                say no to a good brussel sprout.</p>
                <p>But more importantly, I’m a <span className="highlight">Seattle
                based Developer passionate about building better digital experiences</span>.
                <br/>
                <br/>
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  )

export default Bio
