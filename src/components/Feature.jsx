import React from 'react'
import seo from '../assets/niche.png'
import anotherImage from '../assets/seo.png'
import analytic from '../assets/analytics.png' // Replace with the path to your new image
import automatic from '../assets/automatic.png'

function Feature() {
  return (
    <div id='features' className='text-center justify-center mt-24 items-center !font-inter px-4 sm:px-6 md:px-8'>
      <h1 className='text-[#e895c5] text-lg'>Features</h1>
      <h1 className='text-center justify-center text-4xl lg:text-6xl font-bold tracking-tight !leading-[1.15] mt-5'>
        We Know The <span className="ml-3 mr-3 relative whitespace-nowrap">
          <span className="absolute bg-black -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
          <span className="relative text-white">Difficult Shorts Scene</span>
        </span>
      </h1>
      <p className='text-gray-500 text-xl text-center lg:mx-72 mt-10'>
        After spending countless hours training an AI model for YouTube SEO best results and with youtube scrape data, TrendTube is the only serious choice for those aiming to excel in the competitive youtube scene.
      </p>
      <div className='max-w-7xl w-full flex flex-col gap-y-10 mx-auto'>

      <div className="p-6 sm:p-8 md:p-10 bg-[#F7FAFC] text-slate-700 rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md mt-10 mx-4 sm:mx-6 md:mx-8">
          <div className="flex flex-col gap-y-3 font-fig justify-center text-[#221d4b]">
            <div className="p-2 rounded-md bg-[#221d4b]/80 text-[#f3efef] w-max">
              <svg fill="currentColor" className="w-8 h-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.4 490.4">
                <g>
                  <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
                    s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
                    M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"/>
                </g>
              </svg>
            </div>
            <h1 className="text-3xl lg:text-5xl text-left text-[#221d4b] font-semibold">
              98% Accuracy SEO.
              <span className="block opacity-70">Make Your Viewers Stay.</span>
            </h1>
            <p className="text-lg tracking-wide w-full text-left">
              Our AI Model has been trained to read youtubes current algorithms and make an inital prediction on viral content that can help your channel reach heights it never has before.
            </p>
            <div className="flex flex-col gap-y-2 tracking-wide text-[#1D4B40]">
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Amazing SEO</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Watch Time</p>
                </div>
              </div>
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Accuracy Scores</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Low Fee</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={anotherImage} alt="Another Feature" className="w-full h-auto" />
          </div>
        </div>
        {/* Second Card */}
        <div className="p-6 sm:p-8 md:p-10 bg-[#F7FAFC] text-slate-700 rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md mt-10 mx-4 sm:mx-6 md:mx-8">
          <div className="rounded-lg overflow-hidden">
            <img src={seo} alt="SEO" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-y-3 font-fig justify-center text-[#221d4b]">
            <div className="p-2 rounded-md bg-[#221d4b]/80 text-[#f3efef] w-max">
            <svg fill="currentColor" className="w-8 h-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="0 0 235.517 235.517" xml:space="preserve">
  <g>
    <path d="M118.1,235.517c7.898,0,14.31-6.032,14.31-13.483c0-7.441,0-13.473,0-13.473
      c39.069-3.579,64.932-24.215,64.932-57.785v-0.549c0-34.119-22.012-49.8-65.758-59.977V58.334c6.298,1.539,12.82,3.72,19.194,6.549
      c10.258,4.547,22.724,1.697,28.952-8.485c6.233-10.176,2.866-24.47-8.681-29.654c-11.498-5.156-24.117-8.708-38.095-10.236V8.251
      c0-4.552-6.402-8.251-14.305-8.251c-7.903,0-14.31,3.514-14.31,7.832c0,4.335,0,7.843,0,7.843
      c-42.104,3.03-65.764,25.591-65.764,58.057v0.555c0,34.114,22.561,49.256,66.862,59.427v33.021
      c-10.628-1.713-21.033-5.243-31.623-10.65c-11.281-5.755-25.101-3.72-31.938,6.385c-6.842,10.1-4.079,24.449,7.294,30.029
      c16.709,8.208,35.593,13.57,54.614,15.518v13.755C103.79,229.36,110.197,235.517,118.1,235.517z M131.301,138.12
      c14.316,4.123,18.438,8.257,18.438,15.681v0.555c0,7.979-5.776,12.651-18.438,14.033V138.12z M86.999,70.153v-0.549
      c0-7.152,5.232-12.657,18.71-13.755v29.719C90.856,81.439,86.999,77.305,86.999,70.153z"/>
  </g>
</svg>
            </div>
            <h1 className="text-3xl lg:text-5xl text-left text-[#221d4b] font-semibold">
              Virality Checker
              <span className="block opacity-70">Niche Trend Checker.</span>
            </h1>
            <p className="text-lg tracking-wide w-full text-left">
              Powered With AI that we trained with concurent Youtube Data, we check your niches to see if they are unsaturated or saturated and if they can even do you any good. Many creators make mistakes of choosing saturated niches which are very hard to get into.
            </p>
            <div className="flex flex-col gap-y-2 tracking-wide text-[#1D4B40]">
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Money Worth</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Credit System</p>
                </div>
              </div>
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Viral</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Low Fee</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10 bg-[#F7FAFC] text-slate-700 rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md mt-10 mx-4 sm:mx-6 md:mx-8">
          <div className="flex flex-col gap-y-3 font-fig justify-center text-[#221d4b]">
            <div className="p-2 rounded-md bg-[#221d4b]/80 text-[#f3efef] w-max">
            <svg fill="currentColor" className="w-8 h-8" height="1em" width="1em" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 504 504" xml:space="preserve">
<g>
	<g>
		<path d="M484.312,86.624H19.688C8.812,86.624,0,95.436,0,106.312v291.376c0,10.876,8.812,19.688,19.688,19.688h464.624
			c10.876,0,19.688-8.812,19.688-19.688V106.312C504,95.436,495.188,86.624,484.312,86.624z M330.56,149.624h71.068V189H330.56
			c-10.884,0-19.736-8.804-19.736-19.688C310.824,158.428,319.676,149.624,330.56,149.624z M330.56,208.688h27.752v39.376H330.56
			c-10.884,0-19.736-8.804-19.736-19.688C310.824,217.492,319.676,208.688,330.56,208.688z M330.56,263.812h55.316v39.376H330.56
			c-10.884,0-19.736-8.804-19.736-19.688C310.824,272.616,319.676,263.812,330.56,263.812z M149.164,362.156
			c-51.984,0-94.276-42.296-94.276-94.276c0-51.98,42.524-94.272,94.508-94.272c2.172,0,4.168,1.764,4.168,3.936v86.272h85.94
			c2.172,0,3.936,1.828,3.936,4C243.44,319.8,201.148,362.156,149.164,362.156z M262.916,248.064H172.58
			c-2.172,0-3.264-1.42-3.264-3.596v-90.34c0-2.172,1.424-3.936,3.6-3.936c51.98,0,94.104,42.12,94.104,94.1
			C267.02,246.472,265.088,248.064,262.916,248.064z M334.688,358.312h-4.128c-10.884,0-19.736-8.804-19.736-19.688
			c0-10.884,8.852-19.688,19.736-19.688h4.128V358.312z M428.904,358.312h-66.656v-39.376H428.9
			c10.884,0,19.736,8.804,19.736,19.688C448.636,349.508,439.784,358.312,428.904,358.312z M428.904,303.188H413.44v-39.376h15.464
			c10.884,0,19.736,8.804,19.736,19.688C448.64,294.384,439.784,303.188,428.904,303.188z M428.904,248.064h-43.028v-39.376h43.028
			c10.884,0,19.736,8.804,19.736,19.688C448.64,239.26,439.784,248.064,428.904,248.064z M429.188,189.272v-39.46
			c11.812,0.028,19.688,8.864,19.688,19.732S441,189.248,429.188,189.272z"/>
	</g>
</g>
</svg>
            </div>
            <h1 className="text-3xl lg:text-5xl text-left text-[#221d4b] font-semibold">
              Insights On Analytics.
              <span className="block opacity-70">Solution To Shorts.</span>
            </h1>
            <p className="text-lg tracking-wide w-full text-left">
              Learn why your short didn't go viral and if there are any problems in the future that you should learn to fix or edit. Find out many ways to improve your content and different methods of posting.
            </p>
            <div className="flex flex-col gap-y-2 tracking-wide text-[#1D4B40]">
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Insights</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Posting</p>
                </div>
              </div>
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Time</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Low Fee</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={analytic} alt="Another Feature" className="w-full h-auto" />
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10 bg-[#F7FAFC] text-slate-700 rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md mt-10 mx-4 sm:mx-6 md:mx-8">
          <div className="rounded-lg overflow-hidden">
            <img src={automatic} alt="automaticimage" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-y-3 font-fig justify-center text-[#221d4b]">
            <div className="p-2 rounded-md bg-[#221d4b]/80 text-[#f3efef] w-max">
            <svg fill="currentColor" className="w-8 h-8" height="1em" width="1em" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 297 297" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M66.102,0H15.804C7.089,0,0,7.089,0,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298
				c8.715,0,15.804-7.089,15.804-15.804V15.804C81.907,7.089,74.817,0,66.102,0z"/>
			<path d="M173.649,0h-50.298c-8.715,0-15.804,7.089-15.804,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298
				c8.715,0,15.804-7.089,15.804-15.804V15.804C189.453,7.089,182.364,0,173.649,0z"/>
			<path d="M66.102,107.547H15.804C7.089,107.547,0,114.636,0,123.351v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298
				c8.715,0,15.804-7.089,15.804-15.804v-50.298C81.907,114.636,74.817,107.547,66.102,107.547z"/>
			<path d="M173.649,107.547h-50.298c-8.715,0-15.804,7.089-15.804,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298
				c8.715,0,15.804-7.089,15.804-15.804v-50.298C189.453,114.636,182.364,107.547,173.649,107.547z"/>
			<path d="M281.196,0h-50.298c-8.715,0-15.804,7.089-15.804,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298
				c8.715,0,15.804-7.089,15.804-15.804V15.804C297,7.089,289.911,0,281.196,0z"/>
			<path d="M281.196,107.547h-50.298c-8.715,0-15.804,7.089-15.804,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298
				c8.715,0,15.804-7.089,15.804-15.804v-50.298C297,114.636,289.911,107.547,281.196,107.547z"/>
			<path d="M66.102,215.093H15.804C7.089,215.093,0,222.183,0,230.898v50.298C0,289.911,7.089,297,15.804,297h50.298
				c8.715,0,15.804-7.089,15.804-15.804v-50.298C81.907,222.183,74.817,215.093,66.102,215.093z"/>
			<path d="M173.649,215.093h-50.298c-8.715,0-15.804,7.089-15.804,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298
				c8.715,0,15.804-7.089,15.804-15.804v-50.298C189.453,222.183,182.364,215.093,173.649,215.093z"/>
			<path d="M281.196,215.093h-50.298c-8.715,0-15.804,7.089-15.804,15.804v50.298c0,8.715,7.089,15.804,15.804,15.804h50.298
				c8.715,0,15.804-7.089,15.804-15.804v-50.298C297,222.183,289.911,215.093,281.196,215.093z"/>
		</g>
	</g>
</g>
</svg>
            </div>
            <h1 className="text-3xl lg:text-5xl text-left text-[#221d4b] font-semibold">
              Easy Mangement.
              <span className="block opacity-70">Automatic Posts.</span>
            </h1>
            <p className="text-lg tracking-wide w-full text-left">
              Our AI and website automatically posts videos that we predict will go viral on your channel automatically. We make sure that the credit usuage is optimal so that we don't waste your credits. This feature can also be turned off just incase the user likes a manual process.
            </p>
            <div className="flex flex-col gap-y-2 tracking-wide text-[#1D4B40]">
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Money Worth</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Management</p>
                </div>
              </div>
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Viral</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z" opacity="0.2"></path>
                    <path d="M243.28,68.24l-24-23.56a16,16,0,0,0-22.58,0L104,136h0l-.11-.11L67.25,100.62a16,16,0,0,0-22.57.06l-24,24a16,16,0,0,0,0,22.61l71.62,72a16,16,0,0,0,22.63,0L243.33,90.91A16,16,0,0,0,243.28,68.24ZM103.62,208,32,136l24-24,.11.11,36.64,35.27a16,16,0,0,0,22.52,0L208.06,56,232,79.6Z"></path>
                  </svg>
                  <p className="text-lg">Posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        
      </div>
    </div>
  )
}

export default Feature
