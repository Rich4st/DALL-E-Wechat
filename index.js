const { Configuration, OpenAIApi } = require('openai');

const configuration = new  Configuration({
  apiKey: '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'
})

const openai = new OpenAIApi(configuration);

async function main() {
  const response = await openai.createImage({
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
  });
  const image_url = response.data.data[0].url;
  console.log(response.data.data);
}

main();
