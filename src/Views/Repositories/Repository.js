import React from "react";
import "./Repositories.css";
import { RiHardDrive2Line } from "react-icons/ri";
import Imagebuttons from "../../Components/ImageButton";
import { AiOutlineStar, AiOutlineHeart, AiOutlineFork } from "react-icons/ai";
const Repository = (props) => {
  return (
    <div className="repository">
      {props.list.map((ele) => {
        return (
          <div className="repoRowHolder">
            <div className="repositoryRow">
              <div className="repoTitleSummaryHolder">
                <div className="repoRowTitle">
                  <RiHardDrive2Line color={"#ffff"}></RiHardDrive2Line>
                  <p>
                    {ele.repo.split("/")[0]}/
                    <span className="bold">{ele.repo.split("/")[1]}</span>
                  </p>
                </div>
                <p>{ele.desc}</p>
              </div>
              <div className="rowbuttonHolder">
                <Imagebuttons heart label="Sponsor"></Imagebuttons>
                <Imagebuttons star="Like" label="Like"></Imagebuttons>
              </div>
            </div>
            <div className="repositoryRow">
              <div className="rowInfo">
                <p>{ele.lang}</p>
                <div>
                  <AiOutlineStar size={20} color="#ffff"></AiOutlineStar>
                  <p>{ele.stars}</p>
                </div>
                <div>
                  <AiOutlineFork size={20} color="#ffff"></AiOutlineFork>
                  <p>{ele.forks}</p>
                </div>
                <div>
                  <p>Built By</p>
                  <div style={{ marginLeft: 2 }}>
                    {ele.avatars.map((img) => {
                      return (
                        <img
                          style={{ width: 20, borderRadius: "50%", height: 20 }}
                          src={img}
                        ></img>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div style={{ justifyContent: "flex-end" }} className="rowInfo">
                <div>
                  <AiOutlineStar size={20} color="#ffff"></AiOutlineStar>
                  <p>{ele.added_stars}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Repository;
