import React from 'react'
import styled from 'styled-components'
import { MediaType } from '../../../types/MessageType'
import { getBorderCss } from '../borderController'
import FileDownloadLink from "../file-link";


interface Props extends MediaType {
    last?: boolean
    single?: boolean,
    messageType: "incoming" | "outgoing"
}

const ImageContainer = styled.div`
    width: 99%;
    padding: 1px;
    position: relative;
user-select: none;

    `

const Image = styled.img<{
    borderCss: string,
}>`
    width: 100%;
    margin: 0px;
    position: relative;

    ${({ borderCss }) => borderCss};

 `

const Video = styled.video<{
    borderCss: string,
}>`
    width: 100%;
    height: 240px;

    ${({ borderCss }) => borderCss};

`

export default function MediaContent({
    type,
    url,
    last,
    single,
    messageType,
    name
}: Props) {

    return (
        <>
            {(type === 'image' || type === 'gif') &&
                <ImageContainer>
                    <Image
                        borderCss={(() => getBorderCss({
                            type: messageType,
                            last,
                            single
                        }))()}
                        src={url}
                        alt={url} />
                </ImageContainer>
            }



            {(type === 'file' || type === 'video') &&
                <div style={{ position: "relative", width: "100%" }}>
                    {type === 'video' &&
                        <Video
                            controls
                            borderCss={(() => getBorderCss({
                                type: messageType,
                                last,
                                single
                            }))()}
                        >
                            <source src={url} type="video/mp4" />
                            <source src={url} type="video/ogg" />
                            Your browser does not support the video tag.
                        </Video>
                    }
                    <div style={{ width: "100%", display: 'flex' }}>
                        <FileDownloadLink
                            fileUrl={url}
                            fileName={name || url}
                        />
                    </div>
                </div>

            }
        </>
    )
}