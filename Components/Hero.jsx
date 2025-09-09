import React, { useState } from 'react';
const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: '',
    description: '',
    amount: '',
    deadline: '',
  });
  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative">
      <span className="coverLine"></span>
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-black bg-opacity-75 ">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141.3C316 162.7 436 151.3 556 112C676 72.7 796 6.3 916 0C1036 -6.3 1156 39.7 1216 62L1276 84L1276 161.5L1216 161.5C1156 161.5 1036 161.5 916 161.5C796 161.5 676 161.5 556 161.5C436 161.5 316 161.5 196 161.5C76 161.5 -44 161.5 -104 161.5L-164 161.5L-164 13Z"
          />

        </svg>
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold sm:leading-none tracking-tight text-white sm:text-5xl">
                Crypto King <br className='hidden md:block' />
                Crowd Funding CK
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nam totam aspernatur culpa eos accusamus amet at aut a. Id.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-gray-200"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Campaign
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Title
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({ ...campaign, title: e.target.value })
                      }
                    )
                      }
                      placeholder="title"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    /></div>
                    <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className='inline-block mb-1 font-medium'
                    >
                      Description
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({ ...campaign, description: e.target.value })
                      }
                      placeholder="description"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    /></div>
                    <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email" 
                      className="inline-block mb-1 font-medium"
                    >
                      Target Amount 
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({ ...campaign, amount: e.target.value })
                      }
                      placeholder="amount"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    /></div>
                    <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      TargetAmount
                  </form>
              </div>
/>
            </div>
