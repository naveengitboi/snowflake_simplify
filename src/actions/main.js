
class Table{
    constructor({db=null, schema=null, stage=null, table_type = null, table_layer = null, links, name_sepearator="_", link_sepearator=".\n" }={}){
        this.db = db;
        this.stage = stage;
        this.schema = schema;
        this.table_type = table_type;
        this.table_layer = table_layer;
        this.links = links;
        this.tables = [];
        this.name_sepearator = name_sepearator;
        this.link_sepearator = link_sepearator;
    }
    get_tables(){
        const sep_links = this.links.split(this.link_sepearator);
        for(let link of sep_links){
            let l_split = link.split("/");
            const file = l_split[l_split.length - 1].split(".");
            let tab = {
                table: file[0],
                file_extension: file[1]
            }
            this.tables.push(tab);
        }
    }
    show_tables(){
        let tables = "asjdfjasdf";
        for(let tab of this.tables){
            output += `${tab}\n`;
        }
        return tables;
    }
}

export default Table;