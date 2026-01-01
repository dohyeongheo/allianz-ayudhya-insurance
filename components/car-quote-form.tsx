"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/progress-bar";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

// 차량 브랜드 데이터
const carBrands = [
  "Toyota", "Honda", "Nissan", "Mazda", "Suzuki", "Mitsubishi",
  "Ford", "Chevrolet", "BMW", "Mercedes-Benz", "Audi", "Volkswagen",
  "Hyundai", "Kia", "Lexus", "Subaru", "Isuzu", "Volvo"
];

// 연식 데이터 (2024부터 2010까지)
const years = Array.from({ length: 15 }, (_, i) => 2024 - i);

// 모델 데이터 (브랜드별 예시)
const modelsByBrand: Record<string, string[]> = {
  "Toyota": ["Camry", "Corolla", "Prius", "RAV4", "Hilux", "Fortuner"],
  "Honda": ["Civic", "Accord", "CR-V", "HR-V", "City", "Pilot"],
  "Nissan": ["Altima", "Sentra", "Rogue", "Pathfinder", "X-Trail", "Navara"],
  "Mazda": ["Mazda3", "Mazda6", "CX-5", "CX-9", "MX-5"],
  "Suzuki": ["Swift", "SX4", "Vitara", "Jimny", "Ciaz"],
  "Mitsubishi": ["Outlander", "Pajero", "Lancer", "Triton"],
  "Ford": ["Focus", "Fiesta", "Escape", "Ranger", "Explorer"],
  "Chevrolet": ["Cruze", "Malibu", "Equinox", "Trailblazer"],
  "BMW": ["3 Series", "5 Series", "X3", "X5", "X1"],
  "Mercedes-Benz": ["C-Class", "E-Class", "GLC", "GLE", "A-Class"],
  "Audi": ["A4", "A6", "Q5", "Q7", "A3"],
  "Volkswagen": ["Golf", "Jetta", "Passat", "Tiguan", "Polo"],
  "Hyundai": ["Elantra", "Sonata", "Tucson", "Santa Fe", "Accent"],
  "Kia": ["Optima", "Forte", "Sportage", "Sorento", "Rio"],
  "Lexus": ["ES", "RX", "NX", "GS", "LS"],
  "Subaru": ["Forester", "Outback", "Impreza", "XV"],
  "Isuzu": ["D-Max", "MU-X", "TFR"],
  "Volvo": ["XC60", "XC90", "S60", "V60"]
};

interface FormData {
  brand: string;
  year: string;
  model: string;
  name: string;
  phone: string;
  email: string;
}

export function CarQuoteForm({ id }: { id?: string }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    brand: "",
    year: "",
    model: "",
    name: "",
    phone: "",
    email: "",
  });
  const [brandSearch, setBrandSearch] = useState("");

  const filteredBrands = carBrands.filter((brand) =>
    brand.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // 여기에 실제 제출 로직 추가
    alert("견적 요청이 접수되었습니다!");
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.brand !== "";
      case 2:
        return formData.year !== "" && formData.model !== "";
      case 3:
        return formData.name !== "" && formData.phone !== "" && formData.email !== "";
      default:
        return false;
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(1);

  const handleStepChange = (newStep: number) => {
    setDirection(newStep > currentStep ? 1 : -1);
    if (newStep > currentStep) {
      handleNext();
    } else {
      handleBack();
    }
  };

  return (
    <Card className="p-6 md:p-8 rounded-xl border-2 max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          자동차 보험 견적 받기
        </h2>
        <p className="text-muted-foreground">
          간단한 정보만 입력하시면 빠르게 견적을 받아보실 수 있습니다.
        </p>
      </div>

      <ProgressBar currentStep={currentStep} totalSteps={3} />

      <div className="relative min-h-[400px] mt-8 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {currentStep === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Step1
                selectedBrand={formData.brand}
                searchQuery={brandSearch}
                onBrandSelect={(brand) => {
                  setFormData({ ...formData, brand });
                  setBrandSearch("");
                }}
                onSearchChange={setBrandSearch}
                filteredBrands={filteredBrands}
              />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Step2
                selectedYear={formData.year}
                selectedModel={formData.model}
                brand={formData.brand}
                onYearSelect={(year) => setFormData({ ...formData, year })}
                onModelSelect={(model) => setFormData({ ...formData, model })}
              />
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Step3
                formData={formData}
                onInputChange={(field, value) =>
                  setFormData({ ...formData, [field]: value })
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between mt-8 pt-6 border-t">
        <Button
          variant="outline"
          onClick={() => handleStepChange(currentStep - 1)}
          disabled={currentStep === 1}
          className="rounded-xl"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          이전
        </Button>
        {currentStep < 3 ? (
          <Button
            onClick={() => handleStepChange(currentStep + 1)}
            disabled={!isStepValid()}
            className="rounded-xl bg-primary hover:bg-primary/90"
          >
            다음
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!isStepValid()}
            className="rounded-xl bg-primary hover:bg-primary/90"
          >
            견적 요청하기
          </Button>
        )}
      </div>
    </Card>
  );
}

// Step 1: 브랜드 선택
function Step1({
  selectedBrand,
  searchQuery,
  onBrandSelect,
  onSearchChange,
  filteredBrands,
}: {
  selectedBrand: string;
  searchQuery: string;
  onBrandSelect: (brand: string) => void;
  onSearchChange: (query: string) => void;
  filteredBrands: string[];
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-lg font-semibold text-foreground mb-2 block">
          차량 브랜드를 선택하세요
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="브랜드 검색 (예: Toyota, Honda)"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 rounded-xl h-12 text-base"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto">
        {filteredBrands.map((brand) => (
          <button
            key={brand}
            onClick={() => onBrandSelect(brand)}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 hover:scale-105 hover:shadow-md ${
              selectedBrand === brand
                ? "border-primary bg-primary/10 text-primary"
                : "border-border hover:border-primary/50"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>
      {selectedBrand && (
        <div className="p-4 bg-primary/10 border border-primary rounded-xl">
          <p className="text-sm text-muted-foreground">선택된 브랜드:</p>
          <p className="text-lg font-semibold text-primary">{selectedBrand}</p>
        </div>
      )}
    </div>
  );
}

// Step 2: 연식 및 모델 선택
function Step2({
  selectedYear,
  selectedModel,
  brand,
  onYearSelect,
  onModelSelect,
}: {
  selectedYear: string;
  selectedModel: string;
  brand: string;
  onYearSelect: (year: string) => void;
  onModelSelect: (model: string) => void;
}) {
  const availableModels = modelsByBrand[brand] || [];

  return (
    <div className="space-y-6">
      <div>
        <label className="text-lg font-semibold text-foreground mb-2 block">
          연식을 선택하세요
        </label>
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 max-h-[200px] overflow-y-auto">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => onYearSelect(year.toString())}
              className={`p-4 rounded-xl border-2 text-center transition-all duration-200 hover:scale-105 hover:shadow-md ${
                selectedYear === year.toString()
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-lg font-semibold text-foreground mb-2 block">
          모델을 선택하세요
        </label>
        {availableModels.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[200px] overflow-y-auto">
            {availableModels.map((model) => (
              <button
                key={model}
                onClick={() => onModelSelect(model)}
                className={`p-4 rounded-xl border-2 text-center transition-all duration-200 hover:scale-105 hover:shadow-md ${
                  selectedModel === model
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {model}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            브랜드를 먼저 선택해주세요.
          </p>
        )}
      </div>

      {(selectedYear || selectedModel) && (
        <div className="p-4 bg-primary/10 border border-primary rounded-xl space-y-2">
          {selectedYear && (
            <p className="text-sm">
              <span className="text-muted-foreground">연식:</span>{" "}
              <span className="font-semibold text-primary">{selectedYear}년</span>
            </p>
          )}
          {selectedModel && (
            <p className="text-sm">
              <span className="text-muted-foreground">모델:</span>{" "}
              <span className="font-semibold text-primary">{selectedModel}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// Step 3: 연락처 입력
function Step3({
  formData,
  onInputChange,
}: {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-lg font-semibold text-foreground mb-2 block">
          이름
        </label>
        <Input
          type="text"
          placeholder="이름을 입력하세요"
          value={formData.name}
          onChange={(e) => onInputChange("name", e.target.value)}
          className="rounded-xl h-12 text-base"
        />
      </div>

      <div>
        <label className="text-lg font-semibold text-foreground mb-2 block">
          전화번호
        </label>
        <Input
          type="tel"
          placeholder="010-0000-0000"
          value={formData.phone}
          onChange={(e) => onInputChange("phone", e.target.value)}
          className="rounded-xl h-12 text-base"
        />
      </div>

      <div>
        <label className="text-lg font-semibold text-foreground mb-2 block">
          이메일
        </label>
        <Input
          type="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={(e) => onInputChange("email", e.target.value)}
          className="rounded-xl h-12 text-base"
        />
      </div>

      <div className="p-4 bg-muted rounded-xl space-y-2">
        <p className="text-sm font-semibold text-foreground">입력하신 정보 요약</p>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>브랜드: {formData.brand}</p>
          <p>연식: {formData.year}년</p>
          <p>모델: {formData.model}</p>
        </div>
      </div>
    </div>
  );
}

