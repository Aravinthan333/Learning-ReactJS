import PropTypes from "prop-types";
import { useState } from "react";

const prescriptions = [
  {
    id: 1,
    image: "https://via.placeholder.com/130x150",
    url: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
    date: "07 Feb 2024",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/130x150",
    url: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
    date: "17 Jul 2023",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/130x150",
    url: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
    date: "05 Mar 2022",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/130x150",
    url: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
    date: "29 Jan 2021",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/130x150",
    url: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
    date: "28 Oct 2020",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/130x150",
    url: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
    date: "15 Nov 2017",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/130x150",
    url: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
    date: "15 Nov 2017",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/130x150",
    url: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
    date: "15 Nov 2017",
  },
  {
    id: 9,
    image: "https://via.placeholder.com/130x150",
    url: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
    date: "15 Nov 2017",
  },
  {
    id: 10,
    image: "https://via.placeholder.com/130x150",
    url: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
    date: "15 Nov 2017",
  },
];

export const ViewSelectedPrescription = ({ viewPrescription, url }) => {
  return (
    <div onClick={viewPrescription} className="viewSelected">
      {/* <h3>{date}</h3> */}
      <object
        data={`${url}#toolbar=0&navpanes=0&scrollbar=0`}
        style={{
          marginTop: "10px",
          overflow: "hidden",
          width: "844px",
          height: "95vh",
          borderRadius: "5px",
          boxShadow: "2px 2px 10px #000",
        }}
      ></object>
    </div>
  );
};

ViewSelectedPrescription.propTypes = {
  viewPrescription: PropTypes.func,
  date: PropTypes.string,
  url: PropTypes.string,
};

// ----------------------------------------------------------------------------------------------

export const Prescription = ({ date, url }) => {
  const [openPrescription, setOpenPrescription] = useState(false);

  const viewPrescription = () => {
    setOpenPrescription(!openPrescription);
  };

  return (
    <>
      <div className="prescription" onClick={viewPrescription}>
        <div className="coverEach"></div>
        <div className="presImg">
          <object
            data={url}
            style={{
              overflow: "hidden",
              height: "145px",
              width: "115px",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 4px 6px #6B6B6B",
            }}
          ></object>
        </div>
        <div className="presDate">{date}</div>
      </div>
      {openPrescription && (
        <ViewSelectedPrescription
          viewPrescription={viewPrescription}
          date={date}
          url={url}
        />
      )}
    </>
  );
};

Prescription.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string,
};

const PrintingPrescription = () => {
  return (
    <div className="prescriptions">
      {prescriptions.map((prescription) => (
        <Prescription key={prescription.id} {...prescription} />
      ))}
    </div>
  );
};

export default PrintingPrescription;
