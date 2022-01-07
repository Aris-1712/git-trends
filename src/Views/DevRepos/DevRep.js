import React from "react";
import Imagebuttons from "../../Components/ImageButton";
import "./DevRepo.css";

import { IoMdFlame } from "react-icons/io";
import { RiHardDrive2Line } from "react-icons/ri";
const DevRep = (props) => {
  let { list } = props;
  return (
    <>
      {list.map((ele) => {
        return (
          <div className="DevReps">
            <div className="Rank">
              <p>{ele.rank}</p>
            </div>
            <div className="DevRepsNameAvatar">
              <img src={ele.avatar}></img>
              <div className="devNameHolder">
                <h4>{ele.name}</h4>
                <p>{ele.username}</p>
              </div>
            </div>
            <div className="repoInfoHolder">
              <div className="iconLabel">
                <IoMdFlame color="#FFA500" size={15}></IoMdFlame>
                <p>POPULAR REPO</p>
              </div>
              <div className="iconLabel">
                <RiHardDrive2Line color="#ffff" size={15}></RiHardDrive2Line>
                <p className="blue">{ele.popularRepository.repositoryName}</p>
              </div>
              <p>{ele.popularRepository.description}</p>
            </div>
            <div className="rowbuttonHolder devRepButtonHolder">
              <Imagebuttons heart label="Sponsor"></Imagebuttons>
              <Imagebuttons label="Follow"></Imagebuttons>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DevRep;
