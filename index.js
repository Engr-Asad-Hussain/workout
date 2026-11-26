// const baseDir = '/mnt/d/Y-PK/Workout'
const baseDir = '.'
const armInventory = [
  {
    title: '1. Standing Dumbbell Curl',
    video: `${baseDir}/videos/arm/1_standing_dumbbell_curl.mp4`,
  },
  {
    title: '2. Tricep Kickback',
    video: `${baseDir}/videos/arm/2_tricep_kickback.mp4`,
  },
  {
    title: '3. Military Press',
    video: `${baseDir}/videos/arm/3_military_press.mp4`,
  },
  {
    title: '4. Dumbbell Reverse Curl',
    video: `${baseDir}/videos/arm/4_dumbbell_reverse_curl.mp4`,
  },
  {
    title: '5(a). Dumbbell Front Raise',
    video: `${baseDir}/videos/arm/5_a_dumbbell_front_raise.mp4`,
  },
  {
    title: '5(b). Dumbbell Front Raise',
    video: `${baseDir}/videos/arm/5_b_dumbbell_front_raise.mp4`,
  },
  {
    title: '6. Dumbbell Side Lateral Raise',
    video: `${baseDir}/videos/arm/6_dumbbell_side_lateral_raise.mp4`,
  },
  {
    title: '7(a). Alternate Hammer Curl',
    video: `${baseDir}/videos/arm/7_a_alternate_hammer_curl.mp4`,
  },
  {
    title: '7(b). Alternate Hammer Curl (Explanation)',
    video: `${baseDir}/videos/arm/7_b_alternate_hammer_curl.mp4`,
  },
  {
    title: '8. Dumbbell Triceps Extension',
    video: `${baseDir}/videos/arm/8_dumbbell_triceps_extension.mp4`,
  },
  {
    title: '9. Dumbbell Upright Row',
    video: `${baseDir}/videos/arm/9_dumbbell_upright_row.mp4`,
  },
  {
    title: '10. Arnold Dumbbell Press',
    video: `${baseDir}/videos/arm/10_arnold_dumbbell_press.mp4`,
  },
  {
    title: '11. Dumbbell Drag Curl',
    video: `${baseDir}/videos/arm/11_dumbbell_drag_curl.mp4`,
  },
]
const chestInventory = [
  {
    title: '1. Dumbbell Bench Press',
    video: `${baseDir}/videos/chest/?.mp4`,
  },
  {
    title: '2(a). Bent Over Row',
    video: `${baseDir}/videos/chest/2a_bent_over_row.mp4`,
  },
  {
    title: '2(b). Bent Over Row',
    video: `${baseDir}/videos/chest/2_b_bent_over_row.mp4`,
  },
  {
    title: '3. Dumbbell Chest Fly',
    video: `${baseDir}/videos/chest/3_dumbbell_chest_fly.mp4`,
  },
  {
    title: '4. Valley Press',
    video: `${baseDir}/videos/chest/4_valley_press.mp4`,
  },
  {
    title: '5. Triceps Dips',
    video: `${baseDir}/videos/chest/5_triceps_dips.mp4`,
  },
  {
    title: '6. Dumbbell Decline Floor Press',
    video: `${baseDir}/videos/chest/6_dumbbell_decline_floor_press.mp4`,
  },
  {
    title: '7. Dumbbell Pullover',
    video: `${baseDir}/videos/chest/7_dumbbell_pullover.mp4`,
  },
  {
    title: '8. Dumbbell Close Grip Bench Press',
    video: `${baseDir}/videos/chest/8_dumbbell_close_grip_bench_press.mp4`,
  },
  {
    title: '9. Dumbbell Chest Fly',
    video: `${baseDir}/videos/chest/9_dumbbell_chest_fly.mp4`,
  },
  {
    title: '10. Standing Dumbbell Chest Fly (left/right)',
    video: `${baseDir}/videos/chest/10_standing_dumbbell_chest_fly.mp4`,
  },
]
const legInventory = [
  {
    title: '1. Barbell Squats',
    video: `${baseDir}/videos/leg/1_dumbbell_squats.mp4`,
  },
  {
    title: '2(a). Dumbbell Step-up Onto Chair',
    video: `${baseDir}/videos/leg/2_a_dumbbell_step_up_onto_chair.mp4`,
  },
  {
    title: '2(b). Dumbbell Step-up Onto Chair',
    video: `${baseDir}/videos/leg/2_b_dumbbell_step_up_onto_chair.mp4`,
  },
  {
    title: '3. Dumbbell Split Squat Left / Right',
    video: `${baseDir}/videos/leg/3_dumbbell_split_squat.mp4`,
  },
  {
    title: '4(a). Dumbbell Swing',
    video: `${baseDir}/videos/leg/4_a_dumbbell_swing.mp4`,
  },
  {
    title: '4(b). Dumbbell Swing',
    video: `${baseDir}/videos/leg/4_b_dumbbell_swing.mp4`,
  },
  {
    title: '5(a). Standing Dumbbell Calf Raise',
    video: `${baseDir}/videos/leg/5_a_standing_dumbbell_calf_raise.mp4`,
  },
  {
    title: '5(b). Standing Dumbbell Calf Raise',
    video: `${baseDir}/videos/leg/5_b_standing_dumbbell_calf_raise.mp4`,
  },
  {
    title: '6. Dumbbell Backward Lunge',
    video: `${baseDir}/videos/leg/6_dumbbell_backward_lunge.mp4`,
  },
  {
    title: '7. Hip Thrust',
    video: `${baseDir}/videos/leg/7_hip_thrust.mp4`,
  },
  {
    title: '8. Wall Sit',
    video: `${baseDir}/videos/leg/8_wall_sit.mp4`,
  },
  {
    title: '9. Bulgarian Split Squat',
    video: `${baseDir}/videos/leg/9_bulgarian_split_squat.mp4`,
  },
]
const sections = [
  {
    tag: 'arm-inventory',
    inventory: armInventory,
  },
  { tag: 'chest-inventory', inventory: chestInventory },
  { tag: 'leg-inventory', inventory: legInventory },
]
for (const section of sections) {
  const htmlContent = document.getElementById(section.tag)
  section.inventory.map((workout) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <h2>${workout.title}</h2>
    <div class="video-container">
        <video controls loop>
            <source src="${workout.video}" type="video/mp4">
        </video>
    </div>
  `
    htmlContent.appendChild(card)
  })
}
