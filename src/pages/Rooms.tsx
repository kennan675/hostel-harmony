import { useMemo, useState } from "react";
import { ResidentLayout } from "@/layouts/ResidentLayout";
import { mockRooms } from "@/data/mock-maintenance";
import type { RoomStatus } from "@/types/maintenance";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BedDouble, Building2, CheckCircle2, Hammer, Sparkles, Users } from "lucide-react";

const statusFilters: { label: string; value: RoomStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Available", value: "available" },
  { label: "Occupied", value: "occupied" },
  { label: "Maintenance", value: "maintenance" },
];

const statusStyles: Record<RoomStatus, string> = {
  available: "bg-emerald-50 text-emerald-700 border-emerald-100",
  occupied: "bg-slate-100 text-slate-600 border-slate-200",
  maintenance: "bg-amber-50 text-amber-700 border-amber-100",
};

const Rooms = () => {
  const [activeFilter, setActiveFilter] = useState<RoomStatus | "all">("all");

  const stats = useMemo(() => {
    const totalBeds = mockRooms.reduce((acc, room) => acc + room.capacity, 0);
    const occupiedBeds = mockRooms.reduce((acc, room) => acc + room.occupiedBeds, 0);
    const openBeds = totalBeds - occupiedBeds;
    const maintenanceRooms = mockRooms.filter((room) => room.status === "maintenance").length;

    return {
      totalRooms: mockRooms.length,
      openBeds,
      occupiedRate: Math.round((occupiedBeds / totalBeds) * 100),
      maintenanceRooms,
    };
  }, []);

  const filteredRooms = useMemo(() => {
    if (activeFilter === "all") return mockRooms;
    return mockRooms.filter((room) => room.status === activeFilter);
  }, [activeFilter]);

  return (
    <ResidentLayout
      heading={
        <div className="flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-cyan-500" />
          <span>Room availability</span>
        </div>
      }
      subheading="Browse every block, see current occupancy, and reserve available rooms for new or returning residents."
      actions={<Button className="rounded-2xl bg-gradient-primary font-bold">Request Allocation</Button>}
    >
      <section className="grid gap-6 md:grid-cols-4">
        <Card className="p-6 rounded-3xl border-slate-200">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Total rooms</p>
          <div className="mt-3 flex items-center gap-3">
            <Building2 className="h-10 w-10 text-cyan-500" />
            <p className="text-4xl font-black text-slate-900">{stats.totalRooms}</p>
          </div>
          <p className="text-sm text-slate-500 mt-2">Across all blocks and configurations.</p>
        </Card>
        <Card className="p-6 rounded-3xl border-slate-200">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Open beds</p>
          <div className="mt-3 flex items-center gap-3">
            <BedDouble className="h-10 w-10 text-emerald-500" />
            <p className="text-4xl font-black text-slate-900">{stats.openBeds}</p>
          </div>
          <p className="text-sm text-slate-500 mt-2">Ready for immediate allocation.</p>
        </Card>
        <Card className="p-6 rounded-3xl border-slate-200">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Occupancy</p>
          <div className="mt-3 flex items-center gap-3">
            <Users className="h-10 w-10 text-slate-600" />
            <div>
              <p className="text-4xl font-black text-slate-900">{stats.occupiedRate}%</p>
              <p className="text-xs text-slate-500">beds filled</p>
            </div>
          </div>
          <div className="mt-4 h-2 rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-gradient-primary" style={{ width: `${stats.occupiedRate}%` }} />
          </div>
        </Card>
        <Card className="p-6 rounded-3xl border-slate-200">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Under maintenance</p>
          <div className="mt-3 flex items-center gap-3">
            <Hammer className="h-10 w-10 text-amber-500" />
            <p className="text-4xl font-black text-slate-900">{stats.maintenanceRooms}</p>
          </div>
          <p className="text-sm text-slate-500 mt-2">Temporarily unavailable while repairs finish.</p>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap gap-3">
          {statusFilters.map((filter) => (
            <Button
              key={filter.value}
              variant={filter.value === activeFilter ? "default" : "outline"}
              className={`rounded-full px-6 ${filter.value === activeFilter ? "bg-slate-900 text-white" : "border-slate-200 text-slate-600"}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredRooms.map((room) => (
            <Card key={room.id} className="overflow-hidden rounded-[28px] border-slate-200">
              {room.thumbnail && (
                <img src={room.thumbnail} alt={room.name} className="h-40 w-full object-cover" />
              )}
              <div className="space-y-5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{room.block}</p>
                    <h3 className="text-2xl font-semibold text-slate-900">{room.name}</h3>
                  </div>
                  <Badge className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[room.status]}`}>
                    {room.status === "maintenance" ? "Maintenance" : room.status === "available" ? "Available" : "Occupied"}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500">Type</p>
                    <p className="font-semibold text-slate-900">{room.type}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Level</p>
                    <p className="font-semibold text-slate-900">{room.level}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Capacity</p>
                    <p className="font-semibold text-slate-900">
                      {room.occupiedBeds}/{room.capacity} beds
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Last inspection</p>
                    <p className="font-semibold text-slate-900">{room.lastInspection}</p>
                  </div>
                </div>

                <Separator className="bg-slate-100" />

                <div className="space-y-2 text-sm">
                  <p className="text-slate-500">Amenities</p>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <Badge key={amenity} variant="outline" className="rounded-full border-slate-200 text-slate-600">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>

                {room.ratePerMonth && (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Monthly rate</p>
                      <p className="text-2xl font-bold text-slate-900">{room.ratePerMonth}</p>
                    </div>
                    {room.status === "available" ? (
                      <Button className="rounded-2xl bg-gradient-primary font-semibold text-white">Reserve</Button>
                    ) : (
                      <Button variant="outline" className="rounded-2xl border-slate-200 text-slate-700">
                        View
                      </Button>
                    )}
                  </div>
                )}

                {room.status === "maintenance" && (
                  <div className="flex items-center gap-2 rounded-2xl border border-amber-100 bg-amber-50 p-3 text-sm text-amber-700">
                    <Hammer className="h-4 w-4" />
                    Work order in progress. Residents will be notified once reopened.
                  </div>
                )}

                {room.status === "available" && (
                  <div className="flex items-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-sm text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Ready for inspection and check-in.
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </ResidentLayout>
  );
};

export default Rooms;
