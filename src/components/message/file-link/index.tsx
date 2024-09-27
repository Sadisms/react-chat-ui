import React, { useState } from "react";

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

  return (
    <div>
      <a
        href={fileUrl}
        onClick={downloadFile}
        style={{ pointerEvents: loading ? 'none' : 'auto', textDecoration: 'underline', color: loading ? 'gray' : 'blue' }}
      >
        {loading ? 'Loading...' : fileName}
      </a>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FileDownloadLink;
