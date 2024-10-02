import React from "react";
import {Link} from 'react-router-dom';


const DownloadIcon = <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    style={{ position: "absolute", left: 12, top: 8 }}
    strokeWidth="2"
    stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

interface FileDownloadLinkProps {
  fileUrl: string;
  fileName: string;
}

const FileDownloadLink: React.FC<FileDownloadLinkProps> = ({ fileUrl, fileName }) => {
  const text = <>{DownloadIcon}&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ textDecoration: "underline" }}>{fileName}</span></>

  return (
    <div
      style={{
        paddingTop: "10px",
        paddingBottom: "10px"
      }}
    >
      <Link
        to={fileUrl}
        download={fileName}
        target="_blank"
        rel="noreferrer"
      >
          {text}
      </Link>
    </div>
  );
};

export default FileDownloadLink;
