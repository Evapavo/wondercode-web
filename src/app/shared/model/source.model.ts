export class Source {
    id: string;
    url: string;
    name: string;
    sourceType: string;
    image?: string;
    text: string;


    public asFormData(): FormData {
        const data = new FormData();
        data.append('url', this.url);
        data.append('name', this.name);
        data.append('sourceType', this.sourceType);
        data.append('image', this.image);
        data.append('text', this.text)

        return data;
    }
}
