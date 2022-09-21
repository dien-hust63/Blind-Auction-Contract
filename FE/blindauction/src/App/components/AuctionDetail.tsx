import React, { useState } from "react";
import "../../css/components/auctiondetail.css";
import moment from "moment";
import { Button } from "semantic-ui-react";
import BidForm from "../Form/BidForm";
interface Props {
    auction:Auction
}


interface Auction {
    biddingEnd: number;
    revealEnd: number;
    beneficiary: string;
    address: string;
}


const AuctionDetail: React.FC<Props> = ({auction}) => {
    const [openBid, setOpenBid] = useState(false);
    function openBidForm() {
        setOpenBid(true);
    }
  return (
    <div className="auction-detail">
        <div>Auction Address: {auction.address}</div>
        <div>Bidding End: {moment(new Date(auction.biddingEnd*1000)).format('MM/DD/YYYY HH:MM:SS')}</div>
        <div>Reveal End: {moment(new Date(auction.revealEnd*1000)).format('MM/DD/YYYY HH:MM:SS')}</div>
        <Button
            inverted
            color="blue"
            onClick={() => openBidForm()}
            >
            Bid
        </Button>
        {openBid ? (
        <BidForm
          closeBidForm={() => setOpenBid(false)}
          auction={auction}
        />
      ) : null}
    </div>
  );
};

export default AuctionDetail;
