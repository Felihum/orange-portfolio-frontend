
import AvatarIcon from "../../components/AvatarIcon/AvatarIcon"
import TagsChip from "../TagsChip/TagsChip"
import "./UserDetailsForTit.css"

export default function UserDetailsForTit(tags){
    return(
        <div className="userDataProjectU">

            <div className="userDataAvatarNameDateU">
                <div>
                     <AvatarIcon></AvatarIcon>
                </div>
                <div className="userDetailsProjectU">
                            <div className="userNameProjectU">
                                <p>Camila Soares</p>
                            </div>
                            <div className="dataDayUserU">
                                <p>12/12</p>
                            </div>
                        </div>
                    </div>
                <div className='titProjectUserU'>
                    <p>Ecomerce One Page</p>
                </div>
                    <div className="userTagsProjectU">
                    {
                        tags.tags.map((tag) => {
                            //console.log(tag)
                            <TagsChip key={tag.id} label={tag.name}></TagsChip>
                        })
                        
                    }
                        
                </div>
        </div>
    )
}