import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const PersonalInformation = ({
  tpData,
  maritalStatuses,
  races,
  religions,
  nationalities,
  positions, // Add positions prop
  handleChange,
}: {
  tpData: any;
  maritalStatuses: any[];
  races: any[];
  religions: any[];
  nationalities: any[];
  positions: any[]; // Add positions prop type
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}) => {
  // Find the position name based on the position_id
  const positionName = positions.find((position) => position.id === tpData.position_id)?.name || "";

  return (
    <div className="space-y-8 mt-8">
      <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="id">Tech Partner ID</Label>
            <Input id="id" type="text" value={tpData.id} readOnly />
          </div>
          <div>
            <Label htmlFor="is_active">Status</Label>
            <Input id="is_active" type="text" value={tpData.is_active ? "Active" : "Inactive"} readOnly />
          </div>
        </div>
        <div>
          <Label htmlFor="fullname">Full Name</Label>
          <Input id="fullname" type="text" value={tpData.fullname || ""} readOnly />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="ic_no">IC No</Label>
            <Input id="ic_no" type="text" value={tpData.ic_no || ""} readOnly />
          </div>
          <div>
            <Label htmlFor="mobile_no">Mobile No</Label>
            <Input id="mobile_no" type="text" value={tpData.mobile_no || ""} onChange={handleChange} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="position_id">Position</Label>
            <Input id="position_id" type="text" value={positionName} readOnly />
          </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="work_email">Work Email</Label>
            <Input id="work_email" type="email" value={tpData.work_email || ""} readOnly />
          </div>
          <div>
            <Label htmlFor="personal_email">Personal Email</Label>
            <Input id="personal_email" type="email" value={tpData.personal_email || ""} onChange={handleChange} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" value={tpData.dob || ""} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="place_of_birth">Place of Birth</Label>
            <Input id="place_of_birth" type="text" value={tpData.place_of_birth || ""} onChange={handleChange} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="race_id">Race</Label>
            <Select
              onValueChange={(value) => handleChange({ target: { id: "race_id", value } } as React.ChangeEvent<HTMLInputElement>)}
              value={tpData.race_id || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select race" />
              </SelectTrigger>
              <SelectContent>
                {races.map((race) => (
                  <SelectItem key={race.id} value={race.id}>
                    {race.eng}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="religion_id">Religion</Label>
            <Select
              onValueChange={(value) => handleChange({ target: { id: "religion_id", value } } as React.ChangeEvent<HTMLInputElement>)}
              value={tpData.religion_id || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select religion" />
              </SelectTrigger>
              <SelectContent>
                {religions.map((religion) => (
                  <SelectItem key={religion.id} value={religion.id}>
                    {religion.eng}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="nationality_id">Nationality</Label>
            <Select
              onValueChange={(value) => handleChange({ target: { id: "nationality_id", value } } as React.ChangeEvent<HTMLInputElement>)}
              value={tpData.nationality_id || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select nationality" />
              </SelectTrigger>
              <SelectContent>
                {nationalities.map((nationality) => (
                  <SelectItem key={nationality.id} value={nationality.id}>
                    {nationality.eng}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="marital_status">Marital Status</Label>
            <Select
              onValueChange={(value) => handleChange({ target: { id: "marital_status", value } } as React.ChangeEvent<HTMLInputElement>)}
              value={tpData.marital_status || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select marital status" />
              </SelectTrigger>
              <SelectContent>
                {maritalStatuses.map((status) => (
                  <SelectItem key={status.id} value={status.id}>
                    {status.eng}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;