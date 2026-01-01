"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Navigation } from "lucide-react";

// 예시 병원 데이터 (실제로는 API에서 가져올 수 있음)
const sampleHospitals = [
  {
    id: 1,
    name: "Bumrungrad International Hospital",
    address: "33 Sukhumvit 3, Khlong Toei Nuea, Watthana, Bangkok",
    distance: "2.5 km",
    specialty: "종합병원"
  },
  {
    id: 2,
    name: "Bangkok Hospital",
    address: "2 Soi Soonvijai 7, New Petchaburi Rd., Huai Khwang, Bangkok",
    distance: "5.8 km",
    specialty: "종합병원"
  },
  {
    id: 3,
    name: "Samitivej Hospital Sukhumvit",
    address: "133 Sukhumvit 49, Khlong Toei Nuea, Watthana, Bangkok",
    distance: "3.2 km",
    specialty: "종합병원"
  },
  {
    id: 4,
    name: "Bangkok General Hospital",
    address: "142/11 Sukhumvit 63, Khlong Tan Nuea, Watthana, Bangkok",
    distance: "4.1 km",
    specialty: "종합병원"
  }
];

export function HospitalFinder() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hospitals, setHospitals] = useState(sampleHospitals);
  const [useLocation, setUseLocation] = useState(false);

  const handleSearch = () => {
    // 실제로는 API 호출로 검색 결과를 가져옴
    if (searchQuery.trim()) {
      const filtered = sampleHospitals.filter(hospital =>
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setHospitals(filtered);
    } else {
      setHospitals(sampleHospitals);
    }
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUseLocation(true);
          // 실제로는 현재 위치 기반으로 병원 검색
          alert("현재 위치를 기반으로 주변 병원을 찾고 있습니다.");
        },
        (error) => {
          alert("위치 정보를 가져올 수 없습니다. 검색창을 사용해주세요.");
        }
      );
    } else {
      alert("이 브라우저는 위치 정보를 지원하지 않습니다.");
    }
  };

  return (
    <section id="hospital" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            병원 찾기
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            현재 위치 근처의 Allianz 협력 병원을 빠르게 찾아보세요
          </p>
        </div>

        <Card className="rounded-2xl border-2 shadow-sm max-w-4xl mx-auto">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              협력 병원 검색
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 검색창 */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="병원명 또는 주소를 입력하세요"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-10 rounded-xl h-12 text-base"
                />
              </div>
              <Button
                onClick={handleSearch}
                className="rounded-xl bg-primary hover:bg-primary/90 h-12 px-6"
              >
                검색
              </Button>
              <Button
                onClick={handleUseCurrentLocation}
                variant="outline"
                className="rounded-xl border-2 h-12 px-4"
              >
                <Navigation className="w-4 h-4 mr-2" />
                현재 위치
              </Button>
            </div>

            {/* 검색 결과 */}
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {hospitals.length > 0 ? (
                hospitals.map((hospital) => (
                  <Card key={hospital.id} className="rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-foreground mb-2">
                            {hospital.name}
                          </h3>
                          <div className="flex items-start gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">{hospital.address}</p>
                          </div>
                          <div className="flex items-center gap-4 mt-3">
                            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">
                              {hospital.specialty}
                            </span>
                            {hospital.distance && (
                              <span className="text-sm text-muted-foreground">
                                거리: {hospital.distance}
                              </span>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-xl"
                          onClick={() => {
                            // 병원 상세 정보 또는 지도 열기
                            alert(`${hospital.name} 상세 정보를 확인합니다.`);
                          }}
                        >
                          상세보기
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  검색 결과가 없습니다.
                </div>
              )}
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-center text-muted-foreground">
                총 <span className="font-semibold text-primary">400여 개</span>의 협력 병원이 있습니다
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

