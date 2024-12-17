import React from "react";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";

const ExportToolbar = ({ text, isBold, isItalic, isUnderlined }) => {
  const createStyledParagraph = (text) => {
    const paragraph = new Paragraph();
    const textRun = new TextRun(text);

    if (isBold) textRun.bold();
    if (isItalic) textRun.italic();
    if (isUnderlined) textRun.underline();

    paragraph.addRun(textRun);
    return paragraph;
  };

  const downloadDOCX = () => {
    const doc = new Document({
      sections: [
        {
          children: [createStyledParagraph(text)],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => saveAs(blob, "document.docx"));
  };

  return (
    <div className="flex gap-4 p-4 bg-green-50 rounded-lg shadow-md">
      <button
        onClick={downloadDOCX}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Download DOCX
      </button>
    </div>
  );
};

export default ExportToolbar;
