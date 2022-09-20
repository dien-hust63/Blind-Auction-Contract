import Web3 from "web3";
import BN from "bn.js";
import TruffleContract from "@truffle/contract";
import blindAuctionJson from "../build/contracts/BlindAuction.json";

// @ts-ignore
const blindAuction = TruffleContract(blindAuctionJson);

interface Auction {
    biddingTime: number;
    revealTime: number;
    beneficiaryAddress: string;
}

export async function createBlindAuction(
    web3: Web3,
    account: string,
    params: {
        biddingTime: number;
        revealTime: number;
        beneficiaryAddress: string;
    }
  ) {
    debugger
    const { biddingTime, revealTime, beneficiaryAddress } = params;
    blindAuction.setProvider(web3.currentProvider);
    const auctionInstance = await blindAuction.new(biddingTime, revealTime, beneficiaryAddress, {
      from: account,
    });
    const blindAuctionDetail = await getAuctionDetail(web3, account, auctionInstance.address);
    return blindAuctionDetail;
}


export async function getAuctionDetail(
    web3: Web3,
    account: string,
    auctionAddress: string
  ): Promise<Auction> {
    blindAuction.setProvider(web3.currentProvider);
    const auctionInstance = await blindAuction.at(auctionAddress);
    return {
        biddingTime:auctionInstance.biddingTime,
        revealTime:auctionInstance.revealTime,
        beneficiaryAddress:auctionInstance.beneficiaryAddress
    };
  }
  



