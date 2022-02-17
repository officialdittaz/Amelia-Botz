const fetch = require('node-fetch')
const { default: Axios } = require('axios')
const fs = require('fs')
const FormData = require('form-data')
const { fromBuffer }= require('file-type')


const uptotele = async (media) => new Promise(async (resolve, reject) => {
	try {
		let { ext } = await fromBuffer(media)
		console.log('Uploading image to server telegra.ph')
		let form = new FormData()
		form.append('file', media, 'tmp.' + ext)
		await fetch('https://telegra.ph/upload', {
			method: 'POST',
			body: form
		})
		.then(res => res.json())
		.then(res => {
			if (res.error) return reject(res.error)
			resolve('https://telegra.ph' + res[0].src)
			console.log('ok sukses')
		})
		.catch(err => reject(err))
	} catch (e) {
		return console.log(e)
	}
})





const uploadImages = (buffData, type) => {
    return new Promise(async (resolve, reject) => {
        const { ext } = fromBuffer(buffData)
        const filePath = 'stik.' + ext
        fs.writeFile(filePath, buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to server telegra.ph')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
            .then(res => res.json())
            .then(res => {
                if (res.error) return reject(res.error)
                resolve('https://telegra.ph' + res[0].src)
            })
            .then(() => fs.unlinkSync(filePath))
            .catch(err => reject(err))
        })
    })
}


const uploadFile1Day = async (buffer) => {
  const { ext } = await fromBuffer(buffer) || {}
  let form = new FormData
  form.append('file', buffer, 'nih.' + ext)
  let res = await fetch('https://file.io', { // 1 Day Expiry Date
    method: 'POST',
    body: form
  })
  let json = await res.json()
  if (!json.success) throw json
  return json.link
}

const UploadFileUgu = async (input) => {
	return new Promise (async (resolve, reject) => {
			const form = new FormData();
			form.append("files[]", fs.createReadStream(input))
			await Axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}





exports.uploadFile1Day = uploadFile1Day
exports.uptotele = uptotele
exports.uploadImages = uploadImages
exports.UploadFileUgu = UploadFileUgu









