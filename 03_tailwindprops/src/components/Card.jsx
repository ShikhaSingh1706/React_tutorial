import React from 'react'
function Card({username, price="I don't know"}){
    //console.log(props); //empty object
    return(

        <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] overflow-hidden">
  {/* Image */}
  <div>
    <img
      src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
      alt="test"
      className="object-cover object-center rounded-t-xl"
    />
  </div>

  {/* Content */}
  <div className="flex flex-col py-3 px-3 pb-10">
    {/* Title and Price */}
    <div className="flex justify-between items-center">
      <h2 className="font-bold text-white text-lg">{username}</h2>
      <h3 className="text-white text-sm">Price</h3>
    </div>

    {/* NFT ID and Price */}
    <div className="flex justify-between mt-2">
      <p className="text-gray-300 text-sm">{price}</p>
      <p className="text-white font-semibold text-sm">0.01 ETH</p>
    </div>
  </div>
</div>
    )
}
export default Card