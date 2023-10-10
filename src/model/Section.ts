import {timeLog} from "console";

type MField = string | undefined;
type SField = number | undefined;

export class Section {
	private readonly id: MField;
	private readonly uuid: MField;
	private readonly title: MField;
	private readonly instructor: MField;
	private readonly dept: MField;
	private readonly year: SField;
	private readonly avg: SField;
	private readonly pass: SField;
	private readonly fail: SField;
	private readonly audit: SField;

	constructor(section: any) {
		this.id = section["id"];
		this.uuid = section["Course"];
		this.title = section["Title"];
		this.instructor = section["Professor"];
		this.dept = section["Subject"];
		this.year = section["Year"];
		this.avg = section["Avg"];
		this.pass = section["Pass"];
		this.fail = section["Fail"];
		this.audit = section["Audit"];
	}

	public isValid(): boolean {
		return (
			this.id !== undefined &&
			this.uuid !== undefined &&
			this.title !== undefined &&
			this.instructor !== undefined &&
			this.dept !== undefined &&
			this.year !== undefined &&
			this.avg !== undefined &&
			this.pass !== undefined &&
			this.fail !== undefined &&
			this.audit !== undefined
		);
	}
}
