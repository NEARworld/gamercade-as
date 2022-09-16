// Raw bindings directly from WASM.

// Audio
// @ts-ignore: decorator
@external("env", "play_bgm")
export declare function playBgm(bgm_index: i32): void;
// @ts-ignore: decorator
@external("env", "play_sfx")
export declare function playSfx(sfx_index: i32, channel: i32): void;
// @ts-ignore: decorator
@external("env", "stop_bgm")
export declare function stopBgm(): void;
// @ts-ignore: decorator
@external("env", "stop_channel")
export declare function stopChannel(channel: i32): void;
// @ts-ignore: decorator
@external("env", "play_note")
export declare function playNote(note_id: i32, instrument_index: i32, channel: i32): void;
// @ts-ignore: decorator
@external("env", "play_frequency")
export declare function playFrequency(frequency: f32, instrument_index: i32, channel: i32): void;

// Data
// @ts-ignore: decorator
@external("env", "height")
export declare function height(): i32;
// @ts-ignore: decorator
@external("env", "width")
export declare function width(): i32;
// @ts-ignore: decorator
@external("env", "fps")
export declare function fps(): i32;
// @ts-ignore: decorator
@external("env", "frame_time")
export declare function frameTime(): f32;
// @ts-ignore: decorator
@external("env", "sprite_sheet_count")
export declare function spriteSheetCount(): i32;
// @ts-ignore: decorator
@external("env", "palette_count")
export declare function paletteCount(): i32;
// @ts-ignore: decorator
@external("env", "sprite_height")
export declare function spriteHeight(sprite_sheet: i32): i32;
// @ts-ignore: decorator
@external("env", "sprite_width")
export declare function spriteWidth(sprite_sheet: i32): i32;
// @ts-ignore: decorator
@external("env", "sprite_count")
export declare function spriteCount(sprite_sheet: i32): i32;
// @ts-ignore: decorator
@external("env", "bgm_length_secs")
export declare function bgmLengthSecs(bgm_index: i32): f32;
// @ts-ignore: decorator
@external("env", "bgm_length_frames")
export declare function bgmLengthFrames(bgm_index: i32): i32;
// @ts-ignore: decorator
@external("env", "sfx_length_secs")
export declare function sfxLengthSecs(sfx_index: i32): f32;
// @ts-ignore: decorator
@external("env", "sfx_length_frames")
export declare function sfxLengthFrames(sfx_index: i32): i32;

// Graphics Params
// @ts-ignore: decorator
@external("env", "palette_index")
export declare function paletteIndex(palette_index: i32): i32;
// @ts-ignore: decorator
@external("env", "sprite_sheet_index")
export declare function spriteSheetIndex(sprite_sheet_index: i32): i32;
// @ts-ignore: decorator
@external("env", "sprite_index")
export declare function spriteIndex(sprite_index: i32): i32;
// @ts-ignore: decorator
@external("env", "color_index")
export declare function colorIndex(color_index: i32): i32;
// @ts-ignore: decorator
@external("env", "flip_x")
export declare function flipX(flip_x: i32): i32;
// @ts-ignore: decorator
@external("env", "flip_y")
export declare function flipY(flip_y: i32): i32;
// @ts-ignore: decorator
@external("env", "graphics_parameters")
export declare function graphicsParameters(
    palette_index: i32,
    sprite_sheet_index: i32,
    sprite_index: i32,
    color_index: i32,
    flip_x: i32,
    flip_y: i32,
): i32;

// Draw
// @ts-ignore: decorator
@external("env", "clear_screen")
export declare function clearScreen(graphics_parameters: i32): void;
// @ts-ignore: decorator
@external("env", "set_pixel")
export declare function setPixel(graphics_parameters: i32, x: i32, y: i32): void;
// @ts-ignore: decorator
@external("env", "circle")
export declare function circle(graphics_parameters: i32, x: i32, y: i32, radius: i32): void;
// @ts-ignore: decorator
@external("env", "circle_filled")
export declare function circleFilled(graphics_parameters: i32, x: i32, y: i32, radius: i32): void;
// @ts-ignore: decorator
@external("env", "rect")
export declare function rect(graphics_parameters: i32, x: i32, y: i32, width: i32, height: i32): void;
// @ts-ignore: decorator
@external("env", "rect_filled")
export declare function rectFilled(graphics_parameters: i32, x: i32, y: i32, width: i32, height: i32): void;
// @ts-ignore: decorator
@external("env", "line")
export declare function line(graphics_parameters: i32, x0: i32, y0: i32, x1: i32, y1: i32): void;
// @ts-ignore: decorator
@external("env", "sprite")
export declare function sprite(graphics_parameters: i32, transparency_mask: i64, x: i32, y: i32): void;

//Text
// @ts-ignore: decorator// @ts-ignore: decorator

@external("env", "console_log_utf16")
export declare function console_log_utf16(text_ptr: usize, len: usize): void;

// Random
// @ts-ignore: decorator
@external("env", "seed")
export declare function set_seed(seed: i32): void;
// @ts-ignore: decorator
@external("env", "random_int_range")
export declare function randomIntRange(min: i32, max: i32): i32;
// @ts-ignore: decorator
@external("env", "random_float")
export declare function randomFloat(): f32;
// @ts-ignore: decorator
@external("env", "random_float_range")
export declare function randomFloatRange(min: f32, max: f32): f32;

// Input
// @ts-ignore: decorator
@external("env", "button_a_pressed")
export declare function buttonAPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_a_released")
export declare function buttonAPeleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_a_held")
export declare function buttonAHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_b_pressed")
export declare function buttonBPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_b_released")
export declare function buttonBReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_b_held")
export declare function buttonBHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_c_pressed")
export declare function buttonCPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_c_released")
export declare function buttonCReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_c_held")
export declare function buttonCHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_d_pressed")
export declare function buttonDPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_d_released")
export declare function buttonDReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_d_held")
export declare function buttonDHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_up_pressed")
export declare function buttonUpPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_up_released")
export declare function buttonUpReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_up_held")
export declare function buttonUpHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_down_pressed")
export declare function buttonDownPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_down_released")
export declare function buttonDownReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_down_held")
export declare function buttonDownHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_left_pressed")
export declare function buttonLeftPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_left_released")
export declare function buttonLeftReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_left_held")
export declare function buttonLeftHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_right_pressed")
export declare function buttonRightPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_right_released")
export declare function buttonRightReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_right_held")
export declare function buttonRightHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_start_pressed")
export declare function buttonStartPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_start_released")
export declare function buttonStartReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_start_held")
export declare function buttonStartHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_select_pressed")
export declare function buttonSelectPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_select_released")
export declare function buttonSelectReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_select_held")
export declare function buttonSelectHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_left_shoulder_pressed")
export declare function buttonLeftShoulderPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_left_shoulder_released")
export declare function buttonLeftShoulderReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_left_shoulder_held")
export declare function buttonLeftShoulderHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_right_shoulder_pressed")
export declare function buttonRightShoulderPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_right_shoulder_released")
export declare function buttonRightShoulderReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_right_shoulder_held")
export declare function buttonRightShoulderHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_left_stick_pressed")
export declare function buttonLeftStickPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_left_stick_released")
export declare function buttonLeftStickReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_left_stick_held")
export declare function buttonLeftStickHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_right_stick_pressed")
export declare function buttonRightStickPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_right_stick_released")
export declare function buttonRightStickReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_right_stick_held")
export declare function buttonRightStickHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_left_trigger_pressed")
export declare function buttonLeftTriggerPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_left_trigger_released")
export declare function buttonLeftTriggerReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_left_trigger_held")
export declare function buttonLeftTriggerHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_right_trigger_pressed")
export declare function buttonRightTriggerPressed(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_right_trigger_released")
export declare function buttonRightTriggerReleased(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "button_right_trigger_held")
export declare function buttonRightTriggerHeld(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "analog_left_x")
export declare function analogLeftX(player_id: i32): f32;
// @ts-ignore: decorator
@external("env", "analog_left_y")
export declare function analogLeftY(player_id: i32): f32;
// @ts-ignore: decorator
@external("env", "analog_right_x")
export declare function analogRightX(player_id: i32): f32;
// @ts-ignore: decorator
@external("env", "analog_right_y")
export declare function analogRightY(player_id: i32): f32;
// @ts-ignore: decorator
@external("env", "trigger_left")
export declare function triggerLeft(player_id: i32): f32;
// @ts-ignore: decorator
@external("env", "trigger_right")
export declare function triggerRight(player_id: i32): f32;
// @ts-ignore: decorator
@external("env", "raw_input_state")
export declare function rawInputState(played_id: i32): i64;

// Multiplayer
// @ts-ignore: decorator
@external("env", "num_players")
export declare function numPlayers(): i32;
// @ts-ignore: decorator
@external("env", "is_local_player")
export declare function isLocalPlayer(player_id: i32): i32;
// @ts-ignore: decorator
@external("env", "is_remote_player")
export declare function isRemotePlayer(player_id: i32): i32;

function abortHandler (message: string | null, fileName: string | null, lineNumber: u32, columnNumber: u32) :void {
    const ptr = changetype<usize>(message);
    if (ptr != 0) {
        const byteLength = load<u32>(ptr - 4);
        console_log_utf16(ptr, byteLength);
    }
}

export function consoleLog(str: string): void {
    const ptr = changetype<usize>(str);
    const byteLength = load<u32>(ptr - 4);
    console_log_utf16(ptr, byteLength);
}