
import AvatarIcon from "../../components/AvatarIcon/AvatarIcon"
import TagsChip from "../TagsChip/TagsChip"
import "./UserDetails.css"

export default function UserDetails(){
    return(
        <div className="userDataProject">

            <div className="userDataAvatarNameDate">
                <div>
                     <AvatarIcon></AvatarIcon>
                </div>
                <div className="userDetailsProject">
                            <div className="userNameProject">
                                <p>Camila Soares</p>
                            </div>
                            <div className="dataDayUser">
                                <p>12/12</p>
                            </div>
                        </div>
                    </div>
                    <div className="userTagsProject">
                        <TagsChip></TagsChip>
                </div>
        </div>
    )
}