import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Slide from '@mui/material/Slide';
import AutoTransitionCarousel from './CustomCarousel';


const Blog = () => {
	const slideImages = [
		{
		  url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
		  caption: 'Slide 1',
		},
		{
		  url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
		  caption: 'Slide 2',
		},
		// Add more slides as needed
	  ];
  return (
    <div>
		< AutoTransitionCarousel images={['https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
	    'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80']}/>
		{slideImages.map((slide, index) => (
        <Slide key={index} direction="right" in={true} mountOnEnter unmountOnExit>
			<div className="dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-12 mx-auto">
		<div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-9 lg:h-auto" style={{ backgroundImage: `url('solar.jpg')`, backgroundPosition: 'center center', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}>
			<div className="flex flex-col items-center p-8 py-12 text-center">
				<h1 className="py-4 text-5xl text-green-400 font-bold">
                <TypeAnimation sequence = {[`SUSTAINABLE IS\n ATTAINABLE`,1000, "",]}
                speed={10}
                style={{whiteSpace: 'pre-line', fontSize: '1em'}}
                repeat={Infinity}
                />
              </h1>
			<p className="pb-6 text-xl" style={{ whiteSpace: 'pre-line' }}>
            Our commitment to a{' '}
            <span style={{ display: 'block', color: '#38A169', fontFamily: 'cursive', fontWeight: 'bold'}}>Greener Tomorrow</span>
            </p>
           <ul className="list-disc text-xs" style={{display: 'block', fontFamily: 'cursive', listStylePosition: 'inside', marginInlineStart: '0', paddingInlineStart: '1em'}}>
            <li>Carbon net zero before 2045</li>
            <li>Water neutral before 2030</li>
            <li>No net loss of biodiversity</li>
           </ul>
		  <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-black hover:text-white rounded-full text-black mt-4 md:mt-6">Know More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
               <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
			</div>
		</div>
		<div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-3 lg:p-10 dark:divide-white">
			<div className="pt-6 pb-4 space-y-2">
				<h1 className="text-3xl font-bold">Career</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
				<a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
					<span>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
			<div className="pt-6 pb-4 space-y-2">
				<h1 className="text-3xl font-bold">Investors</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
				<a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
					<span>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
			<div className="pt-6 pb-4 space-y-2">
				<h1 className="text-3xl font-bold">Media</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
				<a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400">
					<span>Read more</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</div>
		</Slide>))}
    </div>
  )
}

export default Blog
