import { BRONZE_LAYER, PERM_TABLE } from "./constants";
import dedent from "dedent";

class Setup {
    constructor({ db = null, schema = null, stage = null, azure_name = null, file_format = 'csv', file_format_name = null, links = null, name_sepearator = "_", link_sepearator = ".\n", comment_delimeter = '---------------' } = {}) {
        this.db = db;
        console.log("setup ", this.db);
        this.stage = stage;
        this.schema = schema;
        this.azure_name = azure_name;
        this.links = links;
        this.file_format = file_format;
        this.file_format_name = file_format_name;
        this.name_sepearator = name_sepearator;
        this.link_sepearator = link_sepearator;
        this.comment_delimeter = comment_delimeter;
    }
    draw_margin({ txt = "" }) {
        return dedent(`${this.comment_delimeter} ${txt} ${this.comment_delimeter}
            `);
    }
    create_db() {
        const sql_query = dedent(
            `
        ${this.draw_margin({ txt: 'Create Database' })}

        CREATE OR REPLACE DATABASE ${this.db};
        
        USE ${this.db};
        `);
        return sql_query;
    }
    create_schema() {
        const schema_sql_query = dedent(`
            ${this.draw_margin({ txt: 'Create Schema' })}

            CREATE OR REPLACE SCHEMA ${this.schema};

        `);
        return schema_sql_query;
    }
    get_file_details() {
        switch (this.file_format) {
            case ('csv'):
                return dedent(`
                    FIELD_OPTIONALLY_ENCLOSED_BY = '"'
                    SKIP_HEADER = 0
                    FIELD_DELIMETER = '.';
                `);
                break;
        }

    }
    create_format() {

        const format_query = dedent(`
            ${this.draw_margin({ txt: 'Create File Format' })}

            CREATE OR REPLACE FILE FORMAT ${this.file_format_name}
            TYPE = ${this.file_format}
            ${this.get_file_details()}
            `);

        return format_query;
    }
    storage_integration() {
        const storage_integration_query = dedent(`${this.draw_margin({ txt: 'Create Storage Integration' })}

            CREATE OR REPLACE STORAGE INTEGRATION ${this.azure_name}
                TYPE = EXTERNAL_STAGE
                STORAGE_PROVIDER = 'AZURE'
                ENABLED = TRUE
                AZURE_TENANT_ID = ''
                STORAGE_ALLOWED_LOCATIONS = ('');


            DESC INTEGRATION ${this.azure_name};
            `);
        return storage_integration_query;
    }
    create_stage(){
        const stage_query = dedent(`
            ${this.draw_margin({txt:'Create Stage'})}

            CREATE OR REPLACE STAGE ${this.stage}
            URL = ''
            STORAGE_INTEGRATION = ${this.stage}
            FILE_FORMAT = ${this.file_format_name};
            `)
    }
    config_setup() {
        const query = dedent(`
            ${this.create_db()}


            ${this.create_schema()}


            ${this.create_format()}
            

            ${this.storage_integration()}


            ${this.create_stage()}
            `);
        return query;
    }
    get_tables() {
        const tables = []
        const sep_links = this.links.split(this.link_sepearator);
        for (let link of sep_links) {
            let l_split = link.split("/");
            const file = l_split[l_split.length - 1].split(".");
            let tab = {
                table: file[0],
                file_extension: file[1]
            }
            tables.push(tab);
        }
        return tables;
    }
    show_tables(tables) {
        for (let tab of tables) {
            output += `${tab}\n`;
        }
        return tables;
    }
}


class Tables extends Setup {
    constructor({ db, schema = null, stage = null, links = null, table_type = PERM_TABLE, table_layer = BRONZE_LAYER } = {}) {

        super({ db, schema, stage, links });
        this.table_type = table_type;
        this.table_layer = this.table_layer;
        console.log("Super ", this.db);

    }
}

export {Setup, Tables};