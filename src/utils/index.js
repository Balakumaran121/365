import * as XLSX from 'xlsx';
export const parseCsv = (file) => {
    return new Promise((res) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const sheet = workbook.Sheets[workbook.SheetNames[0]]
            const json = XLSX.utils.sheet_to_json(sheet)
            res(json)
        }
        reader.readAsArrayBuffer(file)
    })
}

export const convertToproduct = (fileData, products) => {
    const lastId = getLastProductNumber(products);
    return fileData.map((item, index) => ({
        id: `PR-${String(lastId + index + 1).padStart(3, "0")}`,
        productName: item.productName,
        description: item.description,
        status: item.status,
        stock: item.stock,
        price: item.price
    }))
}

export const getLastProductNumber = (products) => {
    if (!products.length) return 0;
    const numbers = products.map(p =>
        Number(p.id.replace("PR", ""))
    )
    return Math.max(...numbers)
}