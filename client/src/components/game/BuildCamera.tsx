import { useRef, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useRollerCoaster } from "@/lib/stores/useRollerCoaster";

export function BuildCamera() {
  const { mode, isDraggingPoint, trackPoints, selectedPointId, cameraTarget, setCameraTarget, isAutoRotate } = useRollerCoaster();
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();
  const prevModeRef = useRef(mode);
  
  useEffect(() => {
    if (controlsRef.current && cameraTarget) {
      controlsRef.current.target.set(cameraTarget.x, cameraTarget.y, cameraTarget.z);
      controlsRef.current.update();
    }
  }, [cameraTarget]);
  
  // Reset camera when switching from ride mode to build mode
  useEffect(() => {
    if (prevModeRef.current === "ride" && mode === "build" && controlsRef.current) {
      // Reset camera position and rotation
      camera.position.set(50, 30, 50);
      camera.rotation.set(0, 0, 0);
      camera.up.set(0, 1, 0);
      
      // Reset OrbitControls target to origin
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
    prevModeRef.current = mode;
  }, [mode, camera]);
  
  if (mode === "ride") return null;
  
  return (
    <OrbitControls
      ref={controlsRef}
      enabled={!isDraggingPoint}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      autoRotate={isAutoRotate}
      autoRotateSpeed={3.0}
      minDistance={2}
      maxDistance={500}
      maxPolarAngle={Math.PI / 2 - 0.05}
      panSpeed={1.5}
      zoomSpeed={1.2}
    />
  );
}
