import { utils, write, read } from "xlsx";

export const createExcel = (fileName: string, data: object[]) => {
	const book = utils.book_new();

	book.SheetNames.push(fileName);

	const titles: string[] = [];
	const dataMapped: string[][] = [];
	data.forEach((row, i) => {
		Object.entries(row).forEach(([key, value]) => {
			if (!titles.includes(key)) titles.push(key);
			if (!dataMapped[i]) dataMapped[i] = [];
			dataMapped[i].push(value);
		});
	});

	const sheetData = utils.aoa_to_sheet([[...titles], ...dataMapped]);
	book.Sheets[fileName] = sheetData;

	const bookOut = write(book, { bookType: "xlsx", type: "binary" });

	const buffer = new ArrayBuffer(bookOut.length);
	const view = new Uint8Array(buffer);
	for (let i = 0; i < bookOut.length; i++) {
		view[i] = bookOut.charCodeAt(i) & 0xff;
	}

	const blob = new Blob([buffer], { type: "application/octet-stream" });
	const url = window.URL.createObjectURL(blob);

	const a = document.createElement("a");
	a.href = url;
	a.download = `${fileName}.xlsx`;
	a.click();
	window.URL.revokeObjectURL(url);
};

export const excelToJson = (file: File) => {
	return new Promise((resolve, reject) => {
		var reader = new FileReader();

		reader.onload = function (e: ProgressEvent<FileReader>) {
			if (!e.target) return reject("Error al leer el archivo");
			var data = e.target.result;
			var workbook = read(data, {
				type: "binary",
			});

			const sheet = workbook.Sheets[workbook.SheetNames[0]];
			resolve(utils.sheet_to_json(sheet));
		};

		reader.onerror = function (ex) {
			reject(ex);
		};

		reader.readAsBinaryString(file);
	});
};
