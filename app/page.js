"use client";
import React ,{ useEffect,useContext, useState } from 'react';
//INTERNAL IMPORT
import { CrowdFundingContext } from '@/Context/CrowdFunding';
import {Hero, Card, PupUp} from '../Components';
const index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,

  }=useContext(CrowdFundingContext);
  const [allcampaign, setAllcampaign]= useState();
  const [usercampaign, setUsercampaign]= useState();

  useEffect(()=>{
    const getCampaignsData= getCampaigns();
    const userCampaignData= getUserCampaigns();
    return async()=>{
      const allData= await getCampaignsData;
      const userData= await userCampaignsData;
      setAllcampaign(allData);
      setUsercampaign(userData);
    };
  },[]);
  //DONATE POPUP MODEL
  const [openModel, setOpenModel]= useState(false);
  const [donateCampaign, setDonateCampaign]= useState();
  console.log(donateCampaign);
  return (
    <>
    <Hero titleData={titleData} createCampaign={createCampaign} />
    
    <Card
    title='All Listed Campaign'
    allcampaign={allcampaign }
    setOpenModel={setOpenModel}
    setDonate={setDonateCampaign}
    />
<Card
    title='User Created Campaign'
    allcampaign={usercampaign }
    setOpenModel={setOpenModel}
    setDonate={setDonateCampaign}
    />
    {openModel && (<PupUp
      setOpenModel={setOpenModel}
      donate={donateCampaign}
      donateFunction={donate}
      getDonations={getDonations}
    />)}  
  </>
  );
};
export default index;