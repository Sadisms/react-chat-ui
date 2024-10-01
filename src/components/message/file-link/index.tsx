import React, { useState } from "react";
import styled from "styled-components";

const FileContainer = styled.a`
text-align:left;
vertical-align:text-top;
font-size:14px;
align-self:flex-start;
line-height:auto;
color:#000000;
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
padding-left:16px;
padding-right:16px;
padding-top:8px;
padding-bottom:8px;
position: relative;
box-sizing: border-box;
word-wrap: break-word;
width: 100%;
text-decoration: none;
user-select: none;
`

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
  axiosClient: any;
}

const FileDownloadLink: React.FC<FileDownloadLinkProps> = ({ fileUrl, fileName , axiosClient }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const downloadFile = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axiosClient.get(fileUrl, {
        responseType: 'blob',
      });

      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName;
      link.click();

      window.URL.revokeObjectURL(downloadUrl);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  let text = <>{DownloadIcon}&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ textDecoration: "underline" }}>{fileName}</span></>
  if (loading)
    text = <>Loading...</>;

  return (
    <div>
      <FileContainer
        href={fileUrl}
        onClick={downloadFile}
        style={{
          marginTop: "3px",
          marginBottom: "5px"
        }}
      >
        {text}
      </FileContainer>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FileDownloadLink;
